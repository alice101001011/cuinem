const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const Favorite = require("../models/Favorite.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const fileUploader = require("../config/cloudinary.config");
const cloudinary = require('cloudinary');

// Display user profile

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId });
    const reviews = await Review.find({ user: currentUserId });
    const favorites = await Favorite.find({ user: currentUserId });
    const user = await User.findById(currentUserId);
    //const { username, picture, email } = userData;
    res.render("users/user-profile", {
      currentUserId,
      recipes,
      reviews,
      favorites,
      user,
    });
  } catch (err) {
    next(err);
  }
});

// Display user's recipes

router.get("/my-recipes", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId })
    
    //const reviews = await Review.find({ user: currentUserId });
    //const favorites = await Favorite.find({ user: currentUserId });
    const user = await User.findById(currentUserId);
    //const { username, picture, email } = userData;
    res.render("users/user-recipes", {
      currentUserId,
      recipes,
      // reviews,
      // favorites,
      user,
    });
  } catch (err) {
    next(err);
  }
});

// Display user's favorite recipes a.k.a. cookbook

router.get("/my-cookbook", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    //const recipes = await Recipe.find({ owner: currentUserId });
    //const reviews = await Review.find({ user: currentUserId });
    const favorites = await Recipe.find({ favorited: currentUserId })
    //const user = await User.findById(currentUserId);
    //const { username, picture, email } = userData;
    res.render("users/user-cookbook", {
      currentUserId,
      // recipes,
      // reviews,
      favorites,
      //user,
    });
  } catch (err) {
    next(err);
  }
});

//edit profile

router.get("/profile-edit", isLoggedIn, async (req, res) => {
  try {
    const currentUserId = req.session.user._id;
    const profile = await User.find({ owner: currentUserId });
    res.render("/users/edit-profile", { profile });
  } catch (err) {
    next(err);
  }
});

router.post("/edit-profile", fileUploader.single("imageUpload"), async (req, res, next) => {
  try {
    const { username, email, existingImage } = req.body;

    if (req.file) {
      profilePic = req.file.path;
    } else {
      profilePic = existingImage;
    }

    await User.findByIdAndUpdate({
      username,
      email,
      profilePic,
      owner: req.session.user._id,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/edit/username-update", async (req, res, next) => {
  try {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.session.user._id, { username });
    res.redirect("/profile?msg=username updated");
  } catch (err) {
    next(err);
  }
});

router.post("/edit/pwd-update", async (req, res, next) => {
  try {
    const { password } = req.body;
    await User.findByIdAndUpdate(req.session.user._id, { password });
    res.redirect("/profile?msg=password updated");
  } catch (err) {
    next(err);
  }
});

router.post("/edit/pic-update", async (req, res, next) => {
  try {
    console.log(req.files);
    const { newPic } = req.files.imageUpload.data;
    cloudinary.v2.uploader.upload(newPic, function(error, result) {console.log(result, error);res.redirect("/profile");});
    /* await User.findByIdAndUpdate(req.session.user._id, { username }); */
     
  } catch (err) {
    next(err);
  }
});

module.exports = router;
