window.onload = async () => {
    const response = await axios.get(
        "https://cuinem.herokuapp.com/profile/my-cookbook/json-list"
    );
    console.log(response);

    const removeFavorites = async () => {
        const removeFavoriteButton = document.querySelectorAll(
            ".remove-favorite-button"
        );
        const container = document.querySelector(".card-grid");

        removeFavoriteButton.forEach((button) => {
            button.addEventListener("click", async (event) => {
                // Getting the id of the recipe
                const id = event.currentTarget.children[1].innerHTML;

                // Remove favorite
                await axios.post(
                    `https://cuinem.herokuapp.com/community-recipes/${id}/remove-favorite`
                );

                //Getting the activity data
                const response = await axios.get(
                    "https://cuinem.herokuapp.com/profile/my-cookbook/json-list"
                );
                console.log(response);

                //Deleting DOM content
                container.innerHTML = "";

                //Re-painting DOM content
                response.data.forEach((favorite) => {
                    container.innerHTML += `  
     
                  <div class="card">
                    
                      <img src=${favorite.recipe.imageUrl} class="card-img-top" alt=${favorite.recipe.label} />
                    
                      <div class="card-body">
                          <h5 class="card-title">${favorite.recipe.label}</h5>
                          <p class="card-text"> ${favorite.recipe.description}</p>
                      </div>
                      <div class="card-links">
                      <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                          <a href="/community-recipes/${favorite._id}}" type="button"
                              class="btn btn-sm btn-outline-secondary"><i class="bi-eye-fill"
                                  style="font-size: 1rem; color: cornflowerblue;"></i> View</a>

                          <button type="submit" class="btn btn-sm btn-outline-dark remove-favorite-button"><i
                                  class="bi-trash-fill" style="font-size: 1rem; color: red;"></i> Remove<span
                                  hidden>${favorite._id}}</span></button>
                      </div>
                      <div>

                      </div>
                    
                  </div>

                      </div>
                  </div>
`;

                });
                removeFavorites();
            });
        });
    };

    removeFavorites();
};
