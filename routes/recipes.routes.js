const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require("../config/cloudinary.config");
const fetch = require("node-fetch");

// Display list of all recipes, no need to be logged in to view

router.get("/", async (req, res, next) => {
  try {
    const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;

    // this is just a test search query for recipes with broccoli (;
    const query = req.query.q;
    const recipe_id = req.path;
    console.log(req.params);

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    // heere we obviously wait for the response
    const recipeResponse = await fetch(recipeUrl);

    // here we
    const recipeData = await recipeResponse.json();

    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/recipes-list", { recipeData});
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
    query = req.query.q;
    console.log(req.query);

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    // heere we obviously wait for the response
    const recipeResponse = await fetch(recipeUrl);

    // here we
    const recipeData = await recipeResponse.json();

    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/search-results", { recipeData });
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
      const { name, description, imageUrl } = req.body;
      await Recipe.create({
        name,
        description,
        imageUrl: req.file.path,
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
    //console.log(RecipeId, req.params);
    const currentUserId = req.session.user._id;
    //console.log(currentUserId);
    const recipe = await Recipe.findById(recipeId);
    const ownerId = Recipe.owner._id.valueOf();
    //console.log(Recipe, ownerId);

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

    console.log("recipe id", recipe_id);
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);

    // this is just a test search query for recipes with broccoli (;
    //const recipeId = "b79327d05b8e5b838ad6cfd9576b30b6";

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2${recipe_id}?type=public&app_id=${appId}&app_key=${appKey}`;

    // heere we obviously wait for the response
    const recipeResponse = await fetch(recipeUrl);

    // here we
    const recipeData = await recipeResponse.json();
    console.log(recipeData);
    //res.json(recipeData) // <- if you comment the line below out and uncomment this, you'll the that we get the data as json in the browser
    res.render("recipes/recipe-details", { recipeData });
    // const { id } = req.params;
    // const recipe = await Recipe.findById(id)
    //   .populate("owner")
    //   .populate("reviews");
    // res.render("recipes/recipe-details", recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
