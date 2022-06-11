# IRONHACK MODULE 2 PROJECT

## Idea

##Cuinem
("we cook" in Catalan)

CUINEM is a recipe app, wich includes recipes from all around the world (via edamam api) and also recipes created by users.
- Recipes can be sorted with different parameters.
- A version of the app is visible to non logged users, but with limited options, like search.
- When users log in, they can create a recipe and favorite it. Also delete, edit recipes. Log out.
- Users can edit they profile, username and password.

Deployment: https://cuinem.herokuapp.com/
Trello: https://trello.com/b/Z4CIDayH
Presentation slides: https://docs.google.com/presentation/d/1XILlTKYRi0HgiVuR7eL63QCJZMO0mnasf5MuLBo5vdY/edit?usp=sharing
---

## Pages / content

```
HOME
│
└───RECIPES FROM WEB
│   │   displays recipes from all over the web – filter by country etc - search
│   │
│   └───SINGLE RECIPE
│          displays single recipe
│          (when logged in: user can create review or favorite recipe)
│ 
└───USER RECIPES
│   │   displays recipes – filter by country etc - search
│   │
│   └───SINGLE RECIPE
│          displays single recipe
│          when logged in: user can create review or favorite recipe
│
└───SIGNUP
│      displays signup form (only to logged out)
│
└───LOGIN
│      displays login form (only to logged out)
│
└───PROFILE
    │   shows own recipes with links to edit + delete, create new ones, shows reviews given
    │
    └───FAVORITE RECIPES
    │      displays favorited recipes
    │   
    └───CREATE RECIPE
    │      displays form to create new recipe
    │   
    └───OWN RECIPES
           displays user's recipes

```

---

## Models

### 1. Recipe model !!!

({
  recipe: {
    uri: String,
    label: String,
    description: { type: String, max: 500 },
    instructions: { type: String, max: 1000 },
    imageUrl: {type: String,
      default: "https://res.cloudinary.com/alice-01/image/upload/v1654676172/test-project/recipe-default-pic_ci17h8.png"},
    image: String,
    source: String,
    url: String,
    ingredientLines: [String],
    ingredients: [
      {
        text: String,
        quantity: 0,
        measure: String,
        food: String,
        weight: 0,
        foodId: String,
      },
    ],
    cuisineType: {
      type: String,
      enum: [
        undefined,
        'American',
        "Asian",
        "British",
        "Caribbean",
        "Central Europe",
        "Chinese",
        "Eastern Europe",
        "French",
        "Indian",
        "Italian",
        "Japanese",
        "Kosher",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "South American",
        "South East Asian",
      ],
      default: undefined,
    },
    mealType: {
      type: String,
      enum: ["", "Breakfast", "Lunch", "Dinner", "Snack", "Teatime"],
      default: "",
    },
    dishType: {
      type: String,
      enum: [
        "",
        "Alcohol-cocktail",
        "Biscuits and cookies",
        "Bread",
        "Cereals",
        "Condiments and sauces",
        "Drinks",
        "Desserts",
        "Egg",
        "Main course",
        "Omelet",
        "Pancake",
        "Preps",
        "Preserve",
        "Salad",
        "Sandwiches",
        "Soup",
        "Starter",
      ],
      default: "",
    },
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  //favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite" }],
  favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
  recipeId: String,
  created: {
    type: Date,
    default: new Date(),
  },
});

### 2. User model

(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },

    profilePic: {
      type: String,

      default: "https://res.cloudinary.com/alice-01/image/upload/v1654666838/test-project/profile-pic-placeholder-300x300px_biv5yf.png"
    },
    favoriteRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }]
  },
  {
    timestamps: true,
  }
);

### 3. Review model

({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comment: { type: String, maxlength: 300 },
  recipeId: { type: Schema.Types.ObjectId, ref: "Recipe" },
  recipeName: String,
  created: {
    type: Date,
    default: new Date(),
  },
});

### 4. Ingredient model

({  
        text: String,
        quantity: 0,
        measure: String,
        food: String,
        weight: 0,
        foodId: String,      
});
### 5. Favorite model

({
  recipeId: { type: Schema.Types.ObjectId, ref: "Recipe" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  label: String,rooms
  created: {
    type: Date,
    default: new Date(),
  },
});

---

## Routes

**INDEX**

| Route | HTTP Verb | Description    | View  |
| ----- | --------- | -------------- | ----- |
| /     | GET       | show home page | index |

**AUTH**

| Route        | HTTP Verb | Description                   | View                                   |
| ------------ | --------- | ----------------------------- | -------------------------------------- |
| /auth/signup | GET       | show signup form              | auth > signup                          |
| /auth/signup | POST      | check input, save user to db  | redirect to auth > login if successful |
| /auth/login  | GET       | show login form               | auth > login                           |
| /auth/login  | POST      | check credentials, login user | redirect to index if successful        |
| /auth/logout | POST      | logout user                   | redirect to index                      |

**RECIPES**

| Route               | HTTP Verb | Description                 | View                             |
| ------------------- | --------- | --------------------------- | -------------------------------- |
| /recipes            | GET       | show all recipes            | recipes > recipes-list               |
| /recipes/create     | GET       | show form to create recipes | recipes > create-recipes         |
| /recipes/create     | POST      | save recipes to db          | redirect to users > user-profile |
| /recipes/:id/edit   | GET       | show form to edit recipes   | recipes > edit-recipes           |
| /recipes/:id/edit   | POST      | save edited recipes to db   | redirect to users > user-profile |
| /recipes/:id/delete | POST      | delete recipes              | redirect to users > user-profile |
| /recipes/:id        | GET       | show single recipes details | recipes > recipes-details        |

**REVIEWS**
Ingredientreviews > create-review     |
| /reviews/:id/review | POST      | save review to db             | redirect to recipes-details |

**USERS**

| Route    | HTTP Verb | Description       | View                 |
| -------- | --------- | ----------------- | -------------------- |
| /profile | GET       | show user profile | users > user-profile |





© 2022 Laia & Alice