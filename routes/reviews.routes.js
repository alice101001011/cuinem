const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const isLoggedIn = require("../middleware/isLoggedIn");

// Create review of user created recipe (only for logged in user and NOT owner of recipe)

router.get("/:id/review", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUserId = req.session.user._id;
    const recipe = await Recipe.findById(id)
      .populate("owner")
      .populate("reviews");
    const ownerId = recipe.owner._id.valueOf();

    if (ownerId === currentUserId) {
      res.redirect(`/community-recipes/${id}`),
        {
          errorMessage:
            "You can't write a review for this recipe, because you are the owner",
        };
    } else {
      res.render(`reviews/create-review`, recipe);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/:id/review", isLoggedIn, async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const currentUser = req.session.user._id;
    const { comment } = req.body;
    const recipe = await Recipe.findById(recipeId)
      .populate("owner")
      .populate("reviews");
    const recipeLabel = recipe.recipe.label;

    const createdReview = await Review.create({
      user: currentUser,
      comment,
      recipeId: recipeId,
      recipeName: recipeLabel,
    });

    const updateRecipe = await Recipe.findByIdAndUpdate(recipeId, {
      $push: { reviews: createdReview },
    });

    // console.log(createdReview);
    // console.log(updateRecipe);
    res.redirect(`/community-recipes/${recipeId}`);
  } catch (error) {
    next(error);
  }
});

// Edit own review of another user's recipe
router.get("/:id/edit-review", isLoggedIn, async (req, res, next) => {
  try {
    const reviewId = req.params.id;
    const currentUserId = req.session.user._id;
    const review = await Review.findById(reviewId);
    const userId = review.user._id.valueOf();
    const recipeId = review.recipeId;
    const recipe = await Recipe.findById(recipeId)
      .populate("owner")
      .populate("reviews");

    if (userId !== currentUserId || !userId) {
      res.redirect("/recipes/user-recipes"),
        {
          errorMessage:
            "You can't edit this review, because you are not the owner",
        };
    } else {
      res.render("reviews/edit-review", review);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit-review", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;

    await Review.findByIdAndUpdate(
      id,
      { comment },
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
});

// Delete own review of another user's recipe
router.post("/:id/delete-review", isLoggedIn, async (req, res, next) => {
  try {
    const reviewId = req.params.id;
    const currentUserId = req.session.user._id;
    const review = await Review.findById(reviewId);
    console.log(review);
    const userId = review.user._id.valueOf();

    if (userId !== currentUserId || !userId) {
      res.redirect("/profile"),
        {
          errorMessage:
            "You can't delete this review, because you are not the owner",
        };
    } else {
      await Review.findByIdAndDelete(reviewId);
      res.redirect("/profile");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
