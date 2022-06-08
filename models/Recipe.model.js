const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipe: {
    uri: String,
    label: String,
    description: { type: String, max: 500 },
    instructions: { type: String, max: 1000 },
    imageUrl: {type: String,
      default: "https://res.cloudinary.com/alice-01/image/upload/v1654676172/test-project/recipe-default-pic_ci17h8.png"},
    image: String,
    source: String,
    url: String,
    ingredientLines: [String],
    ingredients: [

      {
        text: String,
        quantity: 0,
        measure: String,
        food: String,
        weight: 0,
        foodId: String,
      },
    ],
    cuisineType: {
      type: String,
      enum: [
        undefined,
        'American',
        "Asian",
        "British",
        "Caribbean",
        "Central Europe",
        "Chinese",
        "Eastern Europe",
        "French",
        "Indian",
        "Italian",
        "Japanese",
        "Kosher",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "South American",
        "South East Asian",
      ],
      default: undefined,
    },
    mealType: {
      type: String,
      enum: ["", "Breakfast", "Lunch", "Dinner", "Snack", "Teatime"],
      default: "",
    },
    dishType: {
      type: String,
      enum: [
        "",
        "Alcohol-cocktail",
        "Biscuits and cookies",
        "Bread",
        "Cereals",
        "Condiments and sauces",
        "Drinks",
        "Desserts",
        "Egg",
        "Main course",
        "Omelet",
        "Pancake",
        "Preps",
        "Preserve",
        "Salad",
        "Sandwiches",
        "Soup",
        "Starter",
      ],
      default: "",
    },
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  //favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite" }],
  favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
  recipeId: String,
  created: {
    type: Date,
    default: new Date(),
  },
});

recipeSchema.index({ "$**": "text" });

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
