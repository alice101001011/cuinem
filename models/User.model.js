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

      default: "https://res.cloudinary.com/alice-01/image/upload/v1654666838/test-project/profile-pic-placeholder-300x300px_biv5yf.png"
    },


    favoriteRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }]

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
