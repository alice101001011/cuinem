// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     console.log("cuinem JS imported successfully!");
//   },
//   false
// );


function activeMenuLinks() {
  let currentpage = window.location.pathname;
  console.log(currentpage);
  if (currentpage === "/recipes"){

    document.getElementById("recipes-menu-link").classList.add("active-menu-item");

  } else if (currentpage === "/community-recipes") {
  
    document.getElementById("community-recipes-menu-link").classList.add("active-menu-item");

  } 
}

activeMenuLinks();