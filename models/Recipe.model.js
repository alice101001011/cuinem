const { Schema, model } = require("mongoose");

// const recipeSchema = new Schema({

//     name: { type: String },
//     description: { type: String },
//     imageUrl: { type: String },
//     owner: { type: Schema.Types.ObjectId, ref: User },
// created: {
//   type: Date,
//   default: new Date()},
//     reviews: [{ type: Schema.Types.ObjectId, ref: Review }]
// });

const recipeSchema = new Schema({
  from: 0,
  to: 0,
  count: 0,
  _links: {
    self: {
      href: String,
      title: String,
    },
    next: {
      href: String,
      title: String,
    },
  },
  hits: [
    {
      recipe: {
        uri: String,
        label: String,
        image: String,
        images: {
          THUMBNAIL: {
            url: String,
            width: 0,
            height: 0,
          },
          SMALL: {
            url: String,
            width: 0,
            height: 0,
          },
          REGULAR: {
            url: String,
            width: 0,
            height: 0,
          },
          LARGE: {
            url: String,
            width: 0,
            height: 0,
          },
        },
        source: String,
        url: String,
        shareAs: String,
        yield: 0,
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
        calories: 0,
        totalWeight: 0,
        cuisineType: [String],
        mealType: [String],
        dishType: [String],
      },
      _links: {
        self: {
          href: String,
          title: String,
        },
        next: {
          href: String,
          title: String,
        },
      },
    },
  ],
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
