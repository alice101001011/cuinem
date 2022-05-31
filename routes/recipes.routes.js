const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require("../config/cloudinary.config");
const fetch = require("node-fetch");
const axios = require("axios");
//const { v4: uuidv4 } = require("uuid");

// Display list of all recipes, no need to be logged in to view

router.get("/", async (req, res, next) => {
  try {
    const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;

    // hardcoded default query to display a list of recipes initially
    const query = "summer";
    
  

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

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    // heere we obviously wait for the response
    const recipeResponse = await fetch(recipeUrl);
    let recipeData = await recipeResponse.json();
    let hitsArray = recipeData.hits;
    console.log("hits array", hitsArray.length)

    let updatedRecipeData = hitsArray.map((recipeObject) => ({
      ...recipeObject,
      recipeId: recipeObject.recipe.uri.split("_")[1],
    }));
    const testQuery = req.query
    console.log("req.query", testQuery)

   
    //console.log("new try", updatedRecipeData);

    const recipes = await Recipe.find();
    console.log(recipes)
    //res.json(updatedRecipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    //res.render("recipes/recipes-list", { hitsArray });
    res.render("recipes/recipes-list", { updatedRecipeData, recipes });
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
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`; //&cuisineType=${cuisineQ}&mealType=${mealQ}&dishType=${dishQ}

    // heere we obviously wait for the response
    const recipeResponse = await fetch(recipeUrl);
    const recipeData = await recipeResponse.json();
    let hitsArray = recipeData.hits;
    //console.log("hits array", hitsArray)

    let updatedRecipeData = hitsArray.map((recipeObject) => ({
      ...recipeObject,
      recipeId: recipeObject.recipe.uri.split("_")[1],
    }));

    console.log("req.params", req.params)
    console.log("req.query", req.query)
   console.log("res body", res.body)
    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/search-results", { updatedRecipeData });
  } catch (err) {
    next(err);
  }
});

// Ceate new Recipe (only for logged in users)

router.get("/create", isLoggedIn, (req, res, next) => {
  res.render("recipes/create-recipe");
});

router.post(
  "/create",
  fileUploader.single("imageUpload"),
  async (req, res, next) => {
    try {
      //console.log(req.session);
      //console.log(req.session.user._id)
      const { label, description } = req.body;
      await Recipe.create({
        label,
        description,
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
   
    console.log(recipeId, req.params);
    const currentUserId = req.session.user._id;
    console.log(currentUserId);
    const recipe = await Recipe.findById(recipeId);
    const ownerId = recipe.owner._id.valueOf();
    console.log(Recipe, ownerId);

    if (ownerId !== currentUserId || !ownerId) {
      res.redirect("/recipes"),
        {
          errorMessage:
            "You can't edit this recipe, because you are not the owner",
        };
    } else {
      res.render("recipes/edit-recipe", recipe);
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
      const recipeId = req.params.id;
      const { name, description, existingImage } = req.body;

      let imageUrl;
      if (req.file) {
        imageUrl = req.file.path;
      } else {
        imageUrl = existingImage;
      }

      await Recipe.findByIdAndUpdate(
        recipeId,
        {
          name,
          description,
          imageUrl,
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

// Delete Recipe (only if logged in and owner of that Recipe)

router.post("/:id/delete", isLoggedIn, async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const currentUserId = req.session.user._id;
    const recipe = await Recipe.findById(recipeId);
    const ownerId = Recipe.owner._id.valueOf();

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

// Display details of one Recipe (visible to logged out as well)

router.get("/:id", async (req, res, next) => {
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

    const recipeData = await recipeResponse.json();
    //console.log("recipe data", recipeData);

    console.log("req.params", req.params)
    console.log("req.query", req.query)
    console.log("res.params", res.params)
    console.log("res.query", res.query)
    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/recipe-details", { recipeData });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
