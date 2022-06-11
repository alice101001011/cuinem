window.onload = async () => {
  // const response = await axios.get(
  //   "http://localhost:3000/profile/my-recipes/json-list"
  // );
  // console.log(response);

  const deleteRecipe = async () => {
    const deleteRecipeButton = document.querySelectorAll(
      ".delete-recipe-button"
    );
    const container = document.querySelector(".card-grid");

    deleteRecipeButton.forEach((button) => {
      button.addEventListener("click", async (event) => {
        // Getting the id of the recipe
        const id = event.currentTarget.children[1].innerHTML;

        // Remove favorite
        await axios.post(
          `http://localhost:3000/community-recipes/${id}/delete`
        );

        //Getting the activity data
        const response = await axios.get(
          "http://localhost:3000/profile/my-recipes/json-list"
        );
        console.log(response);

        //Deleting DOM content
        container.innerHTML = "";

        //Re-painting DOM content
        response.data.forEach((recipe) => {
          container.innerHTML += `  


            <div class="card">
            <img src=${recipe.recipe.imageUrl} class="card-img-top" alt=${recipe.recipe.label} />
            
            <div class="card-body">
                <h5 class="card-title">${recipe.recipe.label}</h5>
                <p class="card-text"> ${recipe.recipe.description}</p>
            </div>
            <div class="card-links">
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <a href="/community-recipes/${recipe._id}}" type="button"
                    class="btn btn-sm btn-outline-secondary"><i class="bi-eye-fill"
                        style="font-size: 1rem; color: cornflowerblue;"></i> View</a>
                <a href="/community-recipes/${recipe._id}}/edit" type="button"
                    class="btn btn-sm btn-outline-secondary"><i class="bi-pencil-fill"
                        style="font-size: 1rem; color: cornflowerblue;"></i> Edit</a>
                <button type="submit" class="btn btn-sm btn-outline-dark delete-recipe-button"><i
                        class="bi-trash-fill" style="font-size: 1rem; color: red;"></i> Delete<span
                        hidden>${recipe._id}</span></button>
            </div>
            <div>

            </div>
        </div>
            
        </div>

  `;
        });
        deleteRecipe();
      });
    });
  };

  deleteRecipe();
};
