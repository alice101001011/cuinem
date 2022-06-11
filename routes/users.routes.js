const router = require("express").Router();

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Review = require("../models/Review.model");
const Favorite = require("../models/Favorite.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const fileUploader = require("../config/cloudinary.config");

// Display user profile

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId });
    const reviews = await Review.find({ user: currentUserId });
    const favorites = await Favorite.find({ user: currentUserId });
    const user = await User.findById(currentUserId);

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

router.get("/edit-profile", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const user = await User.findById(currentUserId);
    res.render("users/edit-profile", user);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/edit-profile",
  fileUploader.single("imageUpload"),
  async (req, res, next) => {
    try {
      const currentUserId = req.session.user._id;
      const { email, username, password, about, existingImage } = req.body;

      let profilePic;
      if (req.file) {
        profilePic = req.file.path;
      } else {
        profilePic = existingImage;
      }

      await User.findByIdAndUpdate(
        currentUserId,
        {
          email,
          username,
          password,
          about,
          profilePic,
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

// Display user's recipes

router.get("/my-recipes", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId });

    const user = await User.findById(currentUserId);

    res.render("users/user-recipes", {
      currentUserId,
      recipes,
      user,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/my-recipes/json-list", async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;
    const recipes = await Recipe.find({ owner: currentUserId });

    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

// Display user's favorite recipes a.k.a. cookbook

router.get("/my-cookbook", isLoggedIn, async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;

    const favorites = await Recipe.find({ favorited: currentUserId });

    res.render("users/user-cookbook", {
      currentUserId,
      favorites,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/my-cookbook/json-list", async (req, res, next) => {
  try {
    const currentUserId = req.session.user._id;

    const favorites = await Recipe.find({ favorited: currentUserId });

    res.json(favorites);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
