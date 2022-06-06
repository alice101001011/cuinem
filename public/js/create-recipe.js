window.onload = async () => {
  let count = 1;
  let addIngredientButton = document.getElementById(
    "add-ingredientline-button"
  );
  let ingredientContainer = document.getElementById("allIngredients");
  let ingredientList = document.querySelector(".ingredient-lines");
  let singleIngredient = document.querySelectorAll(".single-ingredient")[0];

  const addIngredientLine = async () => {
    addIngredientButton.addEventListener("click", async (event) => {
      let newIngredients = ingredientList.cloneNode(true);
      let input = newIngredients.getElementsByTagName("input")[0];
      //input.value = ""
      //let text = newIngredients.querySelector("#text");
      let quantity = newIngredients.querySelector("#quantity");
      let measure = newIngredients.querySelector("#measure");
      let food = newIngredients.querySelector("#food");

      //text.name = `ingredients[${count}][text]`;
      quantity.name = `ingredients[${count}][quantity]`;
      measure.name = `ingredients[${count}][measure]`;
      food.name = `ingredients[${count}][food]`;

      //text.value = "";
      quantity.value = "";
      measure.value = "";
      food.value = "";
      ingredientContainer.appendChild(newIngredients);

      count++;
    });
  };

  addIngredientLine();
};
