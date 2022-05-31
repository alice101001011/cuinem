const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model");
const db = require("../db");
const fetch = require("node-fetch");
let resultData;
let saveCounter = 0;
mongoose.connect(db)
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;

    // this is just a test search query for recipes with broccoli (;
    //const query = req.query.q;
    const query = "summer";
    //const recipe_id = req.path;
    //console.log(req.params);

    // this is the request url as  in the documentation of the api, ijust inserted the variables for query, app id + app key
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;
    const recipeResponse = await fetch(recipeUrl);
    let recipeData = await recipeResponse.json();
    let hitsArray = recipeData.hits;
    //const url = ['https://data.cityofnewyork.us/resource/pvvr-75zk.json']

    const url = ['hitsArray']

url.map(async url => {
try{
   const response = await fetch(url);
   const json = await response.json();
   resultData = [...json];
   for (let i = 0; i < resultData.length; i++) {
      let recipes = new Recipe({
         name: resultData[i].name,
         description: resultData[i].status,
         location: { coordinates:      [resultData[i].polygon.coordinates[0][0][1] , resultData[i].polygon.coordinates[0][0][0]]}
      })
   recipes.save(() => {
      console.log("saved" + recipes)
      
      saveCounter++;
  
      if (saveCounter === resultData.length) {
         mongoose.disconnect()
         .then(() => console.log("saved succesfully and mongodb   disconnected"))
         .catch(error => console.log(error));
         }
      });
   }
} catch (error) {
   console.log(error);
}
})