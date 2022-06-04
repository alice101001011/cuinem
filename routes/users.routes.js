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
    res.render("users/user-profile", { recipes });
  } catch (err) {
    next(err);
  }
});


//edit profile

router.get("/profile-edit", isLoggedIn, async (req, res) => {
  try {
    const currentUserId = req.session.user._id;
    const profile = await User.find({ owner: currentUserId });
    res.render("/users/edit-profile", {profile});    
  } catch (err) {
    next(err);
  }
})

router.post("/edit-profile", async(req, res, next) => {
  try {
    const { username, email } = req.body;
    await User.findByIdAndUpdate({
      username, email,
      owner: req.session.user._id,
    });
  } catch (err) {
    next(err);
  }
})


router.post("/edit/username-update", async(req, res, next) => {
  try {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.session.user._id, { username });
    res.redirect("/profile")
  } catch (err) {
    next(err);
  }
})

router.post("/edit/pwd-update", async(req, res, next) => {
  try {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.session.user._id, { password });
    res.redirect("/profile")
  } catch (err) {
    next(err);
  }
})

router.post("/edit/pic-update", async(req, res, next) => {
  try {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.session.user._id, { username });
    res.redirect("/profile")
  } catch (err) {
    next(err);
  }
})


module.exports = router;
