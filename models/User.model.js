const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },

    pictureUrl: {
      type: String,
    }

    favoriteRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }]

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
