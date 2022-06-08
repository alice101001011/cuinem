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

// Display search bar + list of all recipes, no need to be logged in to view

router.get("/", async (req, res, next) => {
  try {
    const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;

    // hardcoded default query to display a list of recipes initially
    const query = "summer";

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipesUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&q=${query}`;

    // heere we obviously wait for the response
    const recipesResponse = await fetch(recipesUrl);
    let recipeData = await recipesResponse.json();
    let hitsArray = recipeData.hits;
    //console.log("hits array", hitsArray)

    let updatedRecipeData = recipeData.hits.map((recipeObject) => ({
      ...recipeObject,
      recipeId: recipeObject.recipe.uri.split("_")[1],
    }));

    let newRecipeData = {
      ...recipeData,
      hits: updatedRecipeData,
    };

    console.log("new try", updatedRecipeData);
    console.log("new recipe data", newRecipeData);

    // const recipes = await Recipe.find();
    // console.log(recipes)
    //res.json(updatedRecipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    //res.render("recipes/recipes-list", { hitsArray });
    res.render("recipes/recipes-list", {
      newRecipeData,
      pageTitle: "Recipe Search",
    });
  } catch (err) {
    next(err);
  }
});

// Display search results

router.get("/search", async (req, res, next) => {
  try {
    const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;

    // this is just a test search query for recipes with broccoli (;
    const query = req.query.q;
    const mealType = req.query.mealType;
    console.log(req.query);
    console.log(req.query.mealType);

    //const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

    const mealQ = "Breakfast";

    const dishType = [
      "Alcohol-cocktail",
      "Biscuits and cookies",
      "Bread",
      "Cereals",
      "Condiments and sauces",
      "Drinks",
      "Desserts",
      "Egg",
      "Main course",
      "Omelet",
      "Pancake",
      "Preps",
      "Preserve",
      "Salad",
      "Sandwiches",
      "Soup",
      "Starter",
    ];

    const dishQ = "Bread";

    const cuisineType = [
      "American",
      "Asian",
      "British",
      "Caribbean",
      "Central Europe",
      "Chinese",
      "Eastern Europe",
      "French",
      "Indian",
      "Italian",
      "Japanese",
      "Kosher",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "South American",
      "South East Asian",
    ];
    const cuisineQ = "French";

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&q=${query}&cuisineType=${cuisineQ}&mealType=${mealQ}&dishType=${dishQ}`;

    console.log(req.query.cuisineQ);

    // heere we obviously wait for the response
    const recipeResponse = await fetch(recipeUrl);
    const recipeData = await recipeResponse.json();
    let hitsArray = recipeData.hits;
    //console.log("hits array", hitsArray)

    let updatedRecipeData = hitsArray.map((recipeObject) => ({
      ...recipeObject,
      recipeId: recipeObject.recipe.uri.split("_")[1],
    }));

    let newRecipeData = {
      ...recipeData,
      hits: updatedRecipeData,
    };

    //   console.log("req.params", req.params)
    //   console.log("req.query", req.query)
    //  console.log("res body", res.body)
    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/search-results", {
      newRecipeData,
      pageTitle: "Recipe Search Results",
    });
  } catch (err) {
    next(err);
  }
});

// // Display user created recipes

// router.get("/user-recipes", async (req, res, next) => {
//   try {
//     const newRecipeData = await Recipe.find();
//     console.log(newRecipeData);
//     res.render("recipes/recipes-list-users", {
//       newRecipeData,
//       pageTitle: "Community Recipes",
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// // Display search results for user recipes

// router.get("/user-recipes/search", async (req, res, next) => {
//   try {
//     // const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

//     // const mealQ = "Breakfast";

//     // const dishType = [
//     //   "Alcohol-cocktail",
//     //   "Biscuits and cookies",
//     //   "Bread",
//     //   "Cereals",
//     //   "Condiments and sauces",
//     //   "Drinks",
//     //   "Desserts",
//     //   "Egg",
//     //   "Main course",
//     //   "Omelet",
//     //   "Pancake",
//     //   "Preps",
//     //   "Preserve",
//     //   "Salad",
//     //   "Sandwiches",
//     //   "Soup",
//     //   "Starter",
//     // ];

//     // const dishQ = "Bread";

//     // const cuisineType = [
//     //   "American",
//     //   "Asian",
//     //   "British",
//     //   "Caribbean",
//     //   "Central Europe",
//     //   "Chinese",
//     //   "Eastern Europe",
//     //   "French",
//     //   "Indian",
//     //   "Italian",
//     //   "Japanese",
//     //   "Kosher",
//     //   "Mediterranean",
//     //   "Mexican",
//     //   "Middle Eastern",
//     //   "Nordic",
//     //   "South American",
//     //   "South East Asian",
//     // ];
//     // const cuisineQ = "French";
//     console.log(req.query);
//     let query = req.query.q;

//     let recipes = await Recipe.find({

//       //label:{$regex: searchQuery}
//    $text: { $search: query},
//     });
//     //res.json(recipes)
//     //console.log(recipes)

//     res.render("recipes/search-results-users", {
//       pageTitle: "Search Results",
//       recipes,
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// Ceate new Recipe (only for logged in users)

// router.get("/create", isLoggedIn, (req, res, next) => {
//   res.render("recipes/create-recipe", { pageTitle: "Create Recipe" });
// });

// router.post(
//   "/create",
//   fileUploader.single("imageUpload"),
//   async (req, res, next) => {
//     try {
//       console.log(req.body);
//       const {
//         // recipe: {
//         label,
//         description,
//         existingImage,
//         ingredientLines,
//         ingredients, //: [{ text, quantity, measure, food, weight, foodId }],
//         cuisineType,
//         mealType,
//         dishType,
//         // },
//         // owner,
//       } = req.body;

//       //const { text, quantity, measure, food, weight, foodId } = req.body.recipe.ingredients

//       if (req.file) {
//         imageUrl = req.file.path;
//       } else {
//         imageUrl = existingImage;
//       }

//       await Recipe.create({
//         recipe: {
//           label,
//           description,
//           imageUrl,
//           ingredientLines,
//           ingredients,
//           // [{
//           //   text,
//           //   quantity,
//           //   measure,
//           //   food,
//           //   weight,
//           //   foodId,
//           // }],

//           cuisineType,
//           mealType,
//           dishType,
//         },
//         owner: req.session.user._id,
//       });

//       res.redirect("/profile");
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// // Edit Recipe (only visible if logged in and owner of that Recipe)

// router.get("/user-recipes/:id/edit", isLoggedIn, async (req, res, next) => {
//   try {
//     const recipeId = req.params.id;
//     const currentUserId = req.session.user._id;
//     const singleRecipe = await Recipe.findById(recipeId);
//     const ownerId = singleRecipe.owner._id.valueOf();

//     if (ownerId !== currentUserId || !ownerId) {
//       res.redirect("/recipes"),
//         {
//           errorMessage:
//             "You can't edit this recipe, because you are not the owner",
//         };
//     } else {
//       res.render("recipes/edit-recipe", singleRecipe);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.post(
//   "/user-recipes/:id/edit",
//   fileUploader.single("imageUpload"),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const { label, description, existingImage } = req.body;

//       let imageUrl;
//       if (req.file) {
//         imageUrl = req.file.path;
//       } else {
//         imageUrl = existingImage;
//       }

//       await Recipe.findByIdAndUpdate(
//         id,
//         {
//           recipe: {
//             label,
//             description,
//             imageUrl,
//           },
//         },
//         {
//           new: true,
//         }
//       );

//       console.log();
//       res.redirect("/profile");
//     } catch (error) {
//       next(error);
//       res.render("recipes");
//     }
//   }
// );

// Save recipe to favorites (only for user created recipes)

// router.post(
//   "/user-recipes/:id/save-favorite",
//   isLoggedIn,
//   async (req, res, next) => {
//     try {
//       const recipeId = req.params.id;
//       const currentUser = req.session.user._id;
//       const user = await User.findById(currentUser); //populate("favorites")
//       const recipe = await Recipe.findById(recipeId);

//       const favoriteExists = await Favorite.exists({
//         recipeId: recipeId,
//         user: currentUser,
//       });

//       if (!favoriteExists) {
//         const createdFavorite = await Favorite.create({
//           recipeId: recipeId,
//           user: currentUser,
//           label: recipe.recipe.label,
//         });

//         res.redirect(`/recipes/user-recipes/${recipeId}`);
//       } else {
//         res.redirect("/recipes/user-recipes");
//       }
//     } catch (error) {
//       next(error);
//       res.render("recipes");
//     }
//   }
// );

// // Remove recipe from favorites (only for user created recipes)
// router.post(
//   "/user-recipes/:id/remove-favorite",
//   isLoggedIn,
//   async (req, res, next) => {
//     try {
//       console.log("params", req.params);

//       const favoriteId = req.params.id;
//       const favorite = await Favorite.findByIdAndDelete(favoriteId);

//       res.redirect(`/profile`);
//     } catch (error) {
//       next(error);
//       res.render("recipes");
//     }
//   }
// );

// // Delete own recipe

// router.post("/user-recipes/:id/delete", isLoggedIn, async (req, res, next) => {
//   try {
//     const recipeId = req.params.id;
//     const currentUserId = req.session.user._id;
//     const singleRecipe = await Recipe.findById(recipeId);
//     console.log(singleRecipe);
//     const ownerId = singleRecipe.owner._id.valueOf();

//     if (ownerId !== currentUserId || !ownerId) {
//       res.redirect("/recipes"),
//         {
//           errorMessage:
//             "You can't delete this recipe, because you are not the owner",
//         };
//     } else {
//       await Recipe.findByIdAndDelete(recipeId);
//       res.redirect("/profile");
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// // Display details of any user created recipe (visible to logged out as well)

// router.get("/user-recipes/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const recipe = await Recipe.findById(id)
//       .populate("owner")
//       .populate("reviews");

//     console.log(recipe);

//     res.render("recipes/recipe-details-user", { recipe });
//   } catch (error) {
//     next(error);
//   }
// });

// Display details of any api recipe (visible to logged out as well)

router.get("/:webId", async (req, res, next) => {
  try {
    const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;

    const recipe_id = req.path;
    //console.log(req.path)

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2${recipe_id}?type=public&app_id=${appId}&app_key=${appKey}`;

    // here we obviously wait for the response + json
    const recipeResponse = await fetch(recipeUrl);
    //console.log("recipe response", recipeResponse);

    const recipe = await recipeResponse.json();
    console.log("recipe data", recipe);

    console.log("req.params", req.params);
    console.log("req.query", req.query);

    // const { id } = req.params;
    // const recipe = await Recipe.findById(id).populate("owner").populate("reviews");

    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/recipe-details", { recipe });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
