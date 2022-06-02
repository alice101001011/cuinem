const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

// Display user profile

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId });
    const { username, picture, email } = userData;
    res.render("users/user-profile", { currentUserId, recipes, userData });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
