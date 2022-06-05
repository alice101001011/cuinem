document.addEventListener(
    "DOMContentLoaded",
    () => {
      console.log("cuinem JS imported successfully!");
    },
    false
  );

window.onload = (async) => {
    let addIngredientButton = document.getElementById("add-ingredient-button");
let ingredientList = document.querySelector(".ingredient-ul");
let singleIngredient = document.querySelectorAll(".ingredient-li")[0];

  addIngredientButton.addEventListener("click", async (event) => {
    let newIngredients = singleIngredient.cloneNode(true);
    let input = newIngredients.getElementsByTagName("input")[0];
    input.value = "";
    ingredientList.appendChild(newIngredients);
  });
};
