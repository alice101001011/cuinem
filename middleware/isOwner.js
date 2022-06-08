const Recipe = require("../models/Recipe.model");

const isOwner = async (req, res, next) => {
  console.log(req.session.user._id);

  const { id } = req.params;
  const recipe = await Recipe.findById(id).populate("owner");
  //console.log(product.owner._id.valueOf());
  if (req.session.user._id === recipe.owner._id.valueOf()) {
    return next();
  }
  res.redirect("/");
};

module.exports = isOwner;
