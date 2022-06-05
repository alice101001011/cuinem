const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const Favorite = require("../models/Favorite.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

// Display user profile

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId });
    const reviews = await Review.find({ user: currentUserId });
    const favorites = await Favorite.find({ user: currentUserId });
    const user = await User.findById(currentUserId);
    res.render("users/user-profile", { recipes, reviews, favorites, user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
