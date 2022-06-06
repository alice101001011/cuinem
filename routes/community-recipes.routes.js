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
    const communityRecipeData = await Recipe.find();
    console.log(communityRecipeData);
    res.render("recipes/recipes-list-users", {
      communityRecipeData,
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
  "/create-recipe",
  fileUploader.single("imageUpload"),
  async (req, res, next) => {
    try {
      //console.log(req.body);
      const {
        label,
        description,
        instructions,
        existingImage,
        ingredientLines,
        ingredients,
        cuisineType,
        mealType,
        dishType,
      } = req.body;

      if (req.file) {
        imageUrl = req.file.path;
      } else {
        imageUrl = existingImage;
      }

      await Recipe.create({
        recipe: {
          label,
          description,
          instructions,
          imageUrl,
          ingredientLines,
          ingredients,
          cuisineType,
          mealType,
          dishType,
        },
        owner: req.session.user._id,
      });

      res.redirect("/profile/my-recipes");
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
      const {
        label,
        description,
        instructions,
        existingImage,
        ingredientLines,
        ingredients,
        cuisineType,
        mealType,
        dishType,
      } = req.body;

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
            instructions,
            imageUrl,
            ingredientLines,
            ingredients,
            cuisineType,
            mealType,
            dishType,
          },
        },
        {
          new: true,
        }
      );

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
    // const user = await User.findById(currentUser); //populate("favorites")
    // const recipe = await Recipe.findById(recipeId);

    // const favoriteExists = await Favorite.exists({
    //   recipeId: recipeId,
    //   user: currentUser,
    // });

    await User.findByIdAndUpdate(
      currentUser,
      { $addToSet: { favoriteRecipes: recipeId } },
      { new: true }
    );

    await Recipe.findByIdAndUpdate(
      recipeId,
      { $addToSet: { favorited: currentUser } },
      { new: true }
    );

    res.redirect(`/community-recipes/${recipeId}`);
    // if (!favoriteExists) {
    //   const createdFavorite = await Favorite.create({
    //     recipeId: recipeId,
    //     user: currentUser,
    //     label: recipe.recipe.label,
    //   });

    //   res.redirect(`/community-recipes/${recipeId}`);
    // } else {
    //   res.redirect("/community-recipes");
    // }
  } catch (error) {
    next(error);
    res.render("recipes");
  }
});

// Remove recipe from favorites (only for user created recipes)
router.post("/:id/remove-favorite", isLoggedIn, async (req, res, next) => {
  try {
    console.log("params", req.params);

    const recipeId = req.params.id;
    const currentUser = req.session.user._id;

    await User.findByIdAndUpdate(
      currentUser,
      { $pull: { favoriteRecipes: recipeId } },
      { new: true }
    );

    await Recipe.findByIdAndUpdate(
      recipeId,
      { $pull: { favorited: currentUser } },
      { new: true }
    );

    res.redirect("/profile/my-cookbook");
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
      res.redirect("/profile/my-recipes");
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
      .populate("reviews"); //.populate("favorites");

    //const favoritesCount = recipe.favorites.length

    console.log(recipe);

    res.render("recipes/recipe-details-user", { recipe });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
