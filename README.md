# IRONHACK MODULE 2 PROJECT

## Idea

##Cuinem
("we cook" in Catalan)

Recipes App – search for recipes from all over the internet (external API), create/edit/delete own recipes, create reviews for and favorite other recipes

Bonus:

- Meal plan on user profile: calendar with possibility to add meals to each day

---

## Pages / content

```
HOME
│
└───RECIPES
│   │   displays recipes – filter by country etc - search
│   │
│   └───SINGLE RECIPE
│          displays single recipe
│          when logged in: user can create review or favorite recipe
│
└───SIGNUP
│      displays signup form
│
└───LOGIN
│      displays login form
│
└───PROFILE
    │   shows own recipes with ability to edit + delete, create new ones, shows reviews given
    │
    └───FAVORITE RECIPES
    │      displays favorited recipes
    │
    └───CALENDAR
           displays calendar/meal plan (add recipes to days)

```

---

## Models

### 1. Recipe model !!!

[{
name: {type: String, required: true},
description: String,
ingredients: [{
"name": "string",
"quantity": 0,
"measure": "string",
"food": "string",
"weight": 0,
"foodId": "string"
}],
image: String,
Meal type: [],
Dish type: [],
Cuisine type: [],
owner: {type: Schema.Types.ObjectId, ref: "User},
reviews: [{type: Schema.Types.ObjectId, ref: "Reviews}]
}]

### 2. User model

[{
username: {type: String, required: true, unique:true},
email: {type: String, required: true, unique:true},
password: {type: String, required: true, unique:true},
profile-picture: string
}
{
timestamps: true
}]

### 3. Reviews model

[{
user: {type: Schema.Types.ObjectId, ref: "User},
review: {type: String, maxlength: 300}
}]

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
| /recipes            | GET       | show all recipes            | rooms > rooms-list               |
| /recipes/create     | GET       | show form to create recipes | recipes > create-recipes         |
| /recipes/create     | POST      | save recipes to db          | redirect to users > user-profile |
| /recipes/:id/edit   | GET       | show form to edit recipes   | recipes > edit-recipes           |
| /recipes/:id/edit   | POST      | save edited recipes to db   | redirect to users > user-profile |
| /recipes/:id/delete | POST      | delete recipes              | redirect to users > user-profile |
| /recipes/:id        | GET       | show single recipes details | recipes > recipes-details        |

**REVIEWS**

| Route               | HTTP Verb | Description                   | View                        |
| ------------------- | --------- | ----------------------------- | --------------------------- |
| /reviews/:id/review | GET       | show form for creating review | reviews > create-review     |
| /reviews/:id/review | POST      | save review to db             | redirect to recipes-details |

**USERS**

| Route    | HTTP Verb | Description       | View                 |
| -------- | --------- | ----------------- | -------------------- |
| /profile | GET       | show user profile | users > user-profile |
