const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comment: { type: String, maxlength: 300 },
  recipeId: { type: Schema.Types.ObjectId, ref: "Recipe" },
  recipeName: String,
  created: {
    type: Date,
    default: new Date(),
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
