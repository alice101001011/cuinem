const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const isLoggedIn = require("../middleware/isLoggedIn");

// Create review (only for logged in user and NOT owner of recipe)

router.get("/:id/review", isLoggedIn, async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const currentUserId = req.session.user._id;
    const recipe = await Recipe.findById(recipeId).populate("owner");
    const ownerId = recipe.owner._id.valueOf();

    if (ownerId === currentUserId) {
      res.redirect("/recipes"),
        {
          errorMessage:
            "You can't write a review for this recipe, because you are the owner",
        };
    } else {
      res.render("reviews/create-review", recipe);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/:id/review", isLoggedIn, async (req, res, next) => {
  try {
    //console.log(req.params);
    // console.log(req.body);
    // console.log(req.session.user);
    const recipeId = req.params.id;
    const currentUser = req.session.user._id;
    const { comment } = req.body;

    const createdReview = await Review.create({
      user: currentUser,
      comment,
    });

    const updateRecipe = await Recipe.findByIdAndUpdate(recipeId, {
      $push: { reviews: createdReview },
    });

    // console.log(createdReview);
    // console.log(updateRecipe);
    res.redirect(`/recipes/${recipeId}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
