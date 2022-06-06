window.onload = (async) => {
  let addIngredientButton = document.getElementById("add-ingredientline-button");
  let ingredientList = document.querySelector(".ingredient-lines");
  let singleIngredient = document.querySelectorAll(".single-ingredient")[0];

  addIngredientButton.addEventListener("click", async (event) => {
    let newIngredients = singleIngredient.cloneNode(true);
    let input = newIngredients.getElementsByTagName("input")[0];
    input.value = "";
    ingredientList.appendChild(newIngredients);
  });
};

// window.onload = (async) => {
//     let addIngredientButton = document.getElementById("add-ingredient-button");
//     let ingredientList = document.querySelector(".ingredient-ul");
//     let singleIngredient = document.querySelectorAll(".ingredient-li")[0];
  
//     addIngredientButton.addEventListener("click", async (event) => {
//       let newIngredients = singleIngredient.cloneNode(true);
//       let input = newIngredients.getElementsByTagName("input")[0];
//       input.value = "";
//       ingredientList.appendChild(newIngredients);
//     });
//   };
