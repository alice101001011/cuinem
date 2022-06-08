const { Schema, model } = require("mongoose");

const ingredientsSchema = new Schema({
  
        text: String,
        quantity: 0,
        measure: String,
        food: String,
        weight: 0,
        foodId: String,
      
});

const Ingredients = model("Ingredients", ingredientsSchema);

module.exports = Ingredients;
