const router = require("express").Router();

// const Recipe = require("../models/Recipe.model");
// const User = require("../models/User.model");
// const Review = require("../models/Review.model");
// const Favorite = require("../models/Favorite.model");
// const isLoggedIn = require("../middleware/isLoggedIn");
// const fileUploader = require("../config/cloudinary.config");
const fetch = require("node-fetch");
// const axios = require("axios");
// const isOwner = require("../middleware/isOwner");

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

    // console.log("new try", updatedRecipeData);
    // console.log("new recipe data", newRecipeData);

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

    const mealQ = "";

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

    const dishQ = "";

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
    const cuisineQ = "";

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&q=${query}`; //&cuisineType=${cuisineQ}&mealType=${mealQ}&dishType=${dishQ}`;

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
    // console.log("recipe data", recipe);

    // console.log("req.params", req.params);
    // console.log("req.query", req.query);

    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/recipe-details", { recipe });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
