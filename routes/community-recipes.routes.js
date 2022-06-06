const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const Favorite = require("../models/Favorite.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require("../config/cloudinary.config");
const fetch = require("node-fetch");
const axios = require("axios");
const isOwner = require("../middleware/isOwner");

// const url = require("url")
// const urlData = url.parse(request.url, true)
// const query = urlData.query

//const { v4: uuidv4 } = require("uuid");

// Display user created recipes

router.get("/", async (req, res, next) => {
  try {
    const newRecipeData = await Recipe.find();
    console.log(newRecipeData);
    res.render("recipes/recipes-list-users", {
      newRecipeData,
      pageTitle: "Community Recipes",
    });
  } catch (err) {
    next(err);
  }
});

// Display search results for user recipes

router.get("/search", async (req, res, next) => {
  try {
    // const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

    // const mealQ = "Breakfast";

    // const dishType = [
    //   "Alcohol-cocktail",
    //   "Biscuits and cookies",
    //   "Bread",
    //   "Cereals",
    //   "Condiments and sauces",
    //   "Drinks",
    //   "Desserts",
    //   "Egg",
    //   "Main course",
    //   "Omelet",
    //   "Pancake",
    //   "Preps",
    //   "Preserve",
    //   "Salad",
    //   "Sandwiches",
    //   "Soup",
    //   "Starter",
    // ];

    // const dishQ = "Bread";

    // const cuisineType = [
    //   "American",
    //   "Asian",
    //   "British",
    //   "Caribbean",
    //   "Central Europe",
    //   "Chinese",
    //   "Eastern Europe",
    //   "French",
    //   "Indian",
    //   "Italian",
    //   "Japanese",
    //   "Kosher",
    //   "Mediterranean",
    //   "Mexican",
    //   "Middle Eastern",
    //   "Nordic",
    //   "South American",
    //   "South East Asian",
    // ];
    // const cuisineQ = "French";
    console.log(req.query);
    let query = req.query.q;

    let recipes = await Recipe.find({
      //label:{$regex: searchQuery}
      $text: { $search: query },
    });
    //res.json(recipes)
    //console.log(recipes)

    res.render("recipes/search-results-users", {
      pageTitle: "Search Results",
      recipes,
    });
  } catch (err) {
    next(err);
  }
});

// Ceate new Recipe (only for logged in users)

router.get("/create-recipe", isLoggedIn, (req, res, next) => {
  res.render("recipes/create-recipe", { pageTitle: "Create Recipe" });
});

router.post(
  "/create",
  fileUploader.single("imageUpload"),
  async (req, res, next) => {
    try {
      console.log(req.body);
      const {
        // recipe: {
        label,
        description,
        existingImage,
        ingredientLines,
        ingredients, //: [{ text, quantity, measure, food, weight, foodId }],
        cuisineType,
        mealType,
        dishType,
        // },
        // owner,
      } = req.body;

      //const { text, quantity, measure, food, weight, foodId } = req.body.recipe.ingredients

      if (req.file) {
        imageUrl = req.file.path;
      } else {
        imageUrl = existingImage;
      }

      await Recipe.create({
        recipe: {
          label,
          description,
          imageUrl,
          ingredientLines,
          ingredients,
          // [{
          //   text,
          //   quantity,
          //   measure,
          //   food,
          //   weight,
          //   foodId,
          // }],

          cuisineType,
          mealType,
          dishType,
        },
        owner: req.session.user._id,
      });

      res.redirect("/profile");
    } catch (error) {
      next(error);
    }
  }
);

// Edit Recipe (only visible if logged in and owner of that Recipe)

router.get("/:id/edit", isLoggedIn, async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const currentUserId = req.session.user._id;
    const singleRecipe = await Recipe.findById(recipeId);
    const ownerId = singleRecipe.owner._id.valueOf();

    if (ownerId !== currentUserId || !ownerId) {
      res.redirect("/recipes"),
        {
          errorMessage:
            "You can't edit this recipe, because you are not the owner",
        };
    } else {
      res.render("recipes/edit-recipe", singleRecipe);
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/:id/edit",
  fileUploader.single("imageUpload"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { label, description, existingImage } = req.body;

      let imageUrl;
      if (req.file) {
        imageUrl = req.file.path;
      } else {
        imageUrl = existingImage;
      }

      await Recipe.findByIdAndUpdate(
        id,
        {
          recipe: {
            label,
            description,
            imageUrl,
          },
        },
        {
          new: true,
        }
      );

      console.log();
      res.redirect("/profile");
    } catch (error) {
      next(error);
      res.render("recipes");
    }
  }
);

// Save recipe to favorites (only for user created recipes)

router.post("/:id/save-favorite", isLoggedIn, async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const currentUser = req.session.user._id;
    const user = await User.findById(currentUser); //populate("favorites")
    const recipe = await Recipe.findById(recipeId);

    const favoriteExists = await Favorite.exists({
      recipeId: recipeId,
      user: currentUser,
    });

    if (!favoriteExists) {
      const createdFavorite = await Favorite.create({
        recipeId: recipeId,
        user: currentUser,
        label: recipe.recipe.label,
      });

      res.redirect(`/community-recipes/${recipeId}`);
    } else {
      res.redirect("/community-recipes");
    }
  } catch (error) {
    next(error);
    res.render("recipes");
  }
});

// Remove recipe from favorites (only for user created recipes)
router.post("/:id/remove-favorite", isLoggedIn, async (req, res, next) => {
  try {
    console.log("params", req.params);

    const favoriteId = req.params.id;
    const favorite = await Favorite.findByIdAndDelete(favoriteId);

    res.redirect(`/profile/my-cookbook`);
  } catch (error) {
    next(error);
    res.render("recipes");
  }
});

// Delete own recipe

router.post("/:id/delete", isLoggedIn, async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const currentUserId = req.session.user._id;
    const singleRecipe = await Recipe.findById(recipeId);
    console.log(singleRecipe);
    const ownerId = singleRecipe.owner._id.valueOf();

    if (ownerId !== currentUserId || !ownerId) {
      res.redirect("/recipes"),
        {
          errorMessage:
            "You can't delete this recipe, because you are not the owner",
        };
    } else {
      await Recipe.findByIdAndDelete(recipeId);
      res.redirect("/profile");
    }
  } catch (error) {
    next(error);
  }
});

// Display details of any user created recipe (visible to logged out as well)

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id)
      .populate("owner")
      .populate("reviews");

    console.log(recipe);

    res.render("recipes/recipe-details-user", { recipe });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
