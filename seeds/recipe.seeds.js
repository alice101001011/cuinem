require('../db');
const recipes = require('../data/recipes');
const Recipe = require('../models/Recipe.model');

const createRecipes = async () => {
  try {
    await Recipe.create(recipes);
    console.log(`${recipes.length} recipes created`)
  } catch (error) {
    console.error(error);
  }
}

createRecipes();