const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema(
  {
    recipeId: { type: Schema.Types.ObjectId, ref: "Recipe" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    label: String,
    created: {
        type: Date,
        default: new Date(),
      },
  }
);

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
