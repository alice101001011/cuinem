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

// const recipesJson = require('../recipes.json')
// const seedRecipes = async () => {
// try {
//     await Recipe.deleteMany();
//     const createRecipes = await Recipe.create(jsonData);
//     console.log(`${createRecipes.length} recipes created`);
//     await mongoose.connection.close();
// }catch(error){
//     console.log(error);
// }
// }
// seedRecipes();