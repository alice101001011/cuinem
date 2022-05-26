const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/auth", require("./auth.routes"));

router.use("/recipes", require("./recipes.routes"));

router.use("/reviews", require("./reviews.routes"));

router.use("/profile", require("./users.routes"));


module.exports = router;
