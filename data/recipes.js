const recipes = [
    {
      recipe: {
        label: "Italian Cheese Bombs", //this is recipe name
        description: "An exceptional Italian take on real cheese, biscuit dough, and fresh seasoning is great for side dishes and delivers a glorious aroma that it relishes and offers to the meat. Leftover ham or pepperoni and Parmesan respectively sometimes replace salami and Colby-Jack, Cheddar, or Monterey Jack and work for this recipe for preparation, too. ", //just a short description of recipe
        instructions: "    Preheat an oven to 400° F. \
        If a package has 8 biscuits, split each biscuit in half to make 16 flat disks.\
        Divide cheese into 16 equal portions. Cut each piece of salami up into 4 pieces.\
        One biscuit at a time, add a chunk of cheese and 4 pieces of salami on dough and then wrap ends around to create a ball.\
         Be sure to fully seal.\
        Add olive oil to a shallow cup.\
        Add Parmesan, the Italian seasoning, and black pepper (optional) to another shallow cup. \
        Once all the balls have formed, dip each ball in olive oil and then roll the top in the cheese and seasoning mixture.\
        Place on a baking sheet with the Parmesan seasoning side up.\
        Bake in a preheated oven until golden brown, about 10-15 minutes.\
         Serve immediately so the cheese is nice and melting.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756391/test-project/italian-cheese-bombs_vkcqby.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 16, measure: "ounce", food: "tube biscuit dough",},
            { quantity: 6, measure: "ounce", food: "low-moisture Mozzarella",},
            { quantity: 16, measure: "slices", food: "salami",},  
            { quantity: 2, measure: "tbsp", food: "EVOO",},
            { quantity: 1/4, measure: "cup", food: "cheese, Parmesan",},
            { quantity: 1/4, measure: "cup", food: "dried italian seasoning",},
            { quantity: 1, measure: "tbsp", food: "black pepper",},
        ],
        cuisineType:  "Italian",
        mealType: "Snack",
        dishType: "Preps",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Bacon Mac and Cheese Bombs", //this is recipe name
        description: "An extraordinary, divine combination of real bacon, macaroni, \
        and cheese is made and packed with pizza dough, herbs, and ranch dressing and baked to an incredible crisp.\
         The effort and quality are worth it but aioli occasionally replaces the ranch dressing and works for this, too. ", //just a short description of recipe
        instructions: "    Preheat an oven to 425° F. Spray a 9-inch pie plate with cooking spray; set aside.\
        Stir together cheese (optional), Italian seasoning (optional), macaroni-and-cheese, and bacon in a medium bowl; set aside.\
        Unroll pizza dough; press into a 15x9 rectangle. Cut into 24 square pieces.\
        Divide macaroni and cheese mixture evenly and place in the center of each piece.\
        Pull edges of each piece of dough up and around the macaroni-and-cheese mixture to enclose completely, pinching seams to seal. Place seam-side down in a pie plate.\
        Brush tops of dough with butter. Sprinkle evenly with parsley flakes and garlic powder.\
        Bake 15 to 20 minutes or until the top is golden brown. Serve hot and plain with the ranch dressing, if desired.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756371/test-project/bacon-mac-and-cheese-bombs_px1ghq.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 0, measure: "can", food: "cooking spray",},
            { quantity: 4, measure: "tbsp", food: "mozarella cheese, grated",},
            { quantity: 2, measure: "cups", food: "cooked macarroni and cheese",},
            { quantity: 8, measure: "slices", food: "fully cooked bacon",},
            { quantity: 1, measure: "package", food: "pizza dough",},
            { quantity: 2, measure: "cup", food: "butter, melted",},
            { quantity: 1, measure: "teaspoon", food: "parsley flakes",},
            { quantity: 1, measure: "teaspoon", food: "garlic powder",},
            { quantity: 3, measure: "tbsp", food: "italian seasoning, optional",},
            { quantity: 1, measure: "cup", food: "ranch dressing, optional",},
        ],
        cuisineType: "American",
        mealType: "Snack",
        dishType: "Starter",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Lumpiang Keso ", //this is recipe name
        description: "An all-time cheesy favorite, this savory, rich appetizer\
         is made with only cheese and spring roll wrappers and cooked to red-hot perfection,\
          as it simply keeps a crispy aroma with the cheese content. Italian seasoning rarely works for this, too.", //just a short description of recipe
        instructions: "    Cut cheese into thin, long strips with the chef's knife or the cheese knife. \
        Freeze for about 15 to 20 minutes, or overnight.\
        Separate wrappers into individual sheets. On a flat, working surface, lay a wrapper like a diamond.\
         Place cheese on the middle of the wrapper. Include chilis or mushrooms if desired.\
        Fold the bottom, pointed end of the wrapper over the filling. Fold side ends of the sheet inward and roll tightly into a log.\
        Wet the pointed edge of the wrapper with a dab of water to completely seal. Repeat with the remaining cheese and wrappers.\
        In a skillet over medium heat, heat about 1 inch deep with oil. Add spring rolls seam side down in batches, if necessary.\
        Fry, turning once or twice, for about 1 to 2 minutes or until golden-brown and crisp.\
        Remove from the skillet and drain on a wire rack set over a baking sheet. \
        Serve hot and plain with the sweet and sour sauce, if desired, or with other side dishes.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756386/test-project/lumpiang-keso_nm37zc.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
    { quantity: 1, measure: "pound", food: "cheese, velveeta",},
    { quantity: 1, measure: "can", food: "mushrooms",},
    { quantity: 6, measure: "units", food: "chilis",},
    { quantity: 12, measure: "units", food: "spring roll lumpia wrappers",},
    { quantity: 1, measure: "cup", food: "cooking oil",},
        ],
        cuisineType: "Asian",
        mealType: "Snack",
        dishType: "Starter",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Rudolph Popcorn", //this is recipe name
        description: "Red hot chilli kernels", //just a short description of recipe
        instructions: "Pour the oil and corn kernels in a large pot over med-high heat \
        (make sure you use one that has a tight fitting lid). \
        Place the lid on top of the pot and mix it around a few times directly on burner.\
        In a small bowl mix the sugar and cinnamon together. Then add sugar directly on top of the corn kernels.\
        Replace lid and shake the pot in circular motion on the burner, until you hear the kernels start to pop.\
        Continue to shake in a circular motion while the kernels are popping until they are all completely popped, \
        when there's about 2-3 seconds between pops.\
        Remove from heat and pour out onto 2 ft. x 2 ft. piece of wax paper and let it cool.\
        Melt dark chocolate in the microwave, I started with 1 minute then stir and heat for another 30-45. Stir again until completely melted, no chunks. \
        Drizzle over popcorn, then top with red hots and pretzels;\
         then mix together using two large spoons and slightly turning the popcorn, pretzels and red hots over one another, \
         until all of the mix is mostly covered.\
        Once chocolate has cooled and hardened, add in eyeballs and serve.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756391/test-project/rudolph-popcorn_x3kfdf.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
        { quantity: 1/2, measure: "cup", food: "popcorn kernels unpopped",},
        { quantity: 1/4, measure: "cup", food: "oil",},
        { quantity: 1/4, measure: "cup", food: "sugar",},
        { quantity: 1, measure: "teaspoon", food: "cinnamon",},
        { quantity: 2, measure: "cups", food: "dark melting chocolate",},
        { quantity: 1/2, measure: "cup", food: "red hot cinnamon candies",},
        { quantity: 3/4, measure: "cup", food: "thin pretzel sticks",},
        { quantity: 1, measure: "package", food: "candy eyes",},
        ],
        cuisineType: "American",
        mealType: "Snack",
        dishType: "Preps",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Avocado Quesadillas", //this is recipe name
        description: "A delicious and easy quesadilla which is great as an appetizer, snack or even a light lunch. ", //just a short description of recipe
        instructions: "    Slice the avocado.\
        On an open tortilla, spread ¼ cup grated cheese, sliced avocado, and 2 tablespoons of salsa.\
        Broil under a broiler for three minutes.\
        Fold in half, and slice in wedges before serving", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756371/test-project/avocado-quesadillas_doiucn.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1, measure: "unit", food: "avocado",},
            { quantity: 4, measure: "unit", food: "tortillas",},
            { quantity: 8, measure: "tbsp", food: "salsa",},
            { quantity: 1, measure: "cup", food: "grated cheese",},
        ],
        cuisineType: "Mexican",
        mealType: "Snack",
        dishType: "Starter",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Bangkok Beef", //this is recipe name
        description: "An intense combination of real beef, peanut butter, \
        and vegetables is made bolder and packed with crushed red pepper flakes, sesame oil, and peanuts, \
        cooked to red-hot perfection, as it adds some bold zing to the meat, herbs, and spices based in Thailand. \
        Cashews occasionally replace the unsalted peanuts and work for this too. \
        But absolutely unlike the original, stir-fried beef, this Thai dish has a moderate hint of black pepper and soy sauce. ", //just a short description of recipe
        instructions: "Combine peanut butter, soy sauce, sesame oil, \
        cilantro, lemon juice, garlic powder, black pepper, and red pepper flakes in a small bowl; set aside.\
        Partially freeze steak; slice across the grain into ⅛-inch strips with the kitchen knife.\
        Stir-fry beef in oil in a large skillet or wok over high heat 1 to 2 minutes.\
        Add the carrots, onions, red pepper, and peanuts; cook 1 to 2 minutes.\
        Add rice and peanut sauce; heat thoroughly. Transfer the cooked beef to the large bowl.\
        Serve warm and plain, over rice, or with other main dishes. Sprinkle with the remaining cilantro, if desired.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756378/test-project/bangkok-beef_n7qobu.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1/4, measure: "cup", food: "chunky peanut butter",},
            { quantity: 1/3, measure: "cup", food: "soy sauce",},
            { quantity: 1, measure: "tbsp", food: "sesame oil",},
            { quantity: 6, measure: "tbsp", food: "fresh cilantro, chopped",},
            { quantity: 1, measure: "tbsp", food: "lemon juice",},
            { quantity: 2, measure: "teaspoon", food: "garlic powder",},
            { quantity: 1, measure: "teaspon", food: "ground vlack pepper",},
            { quantity: 1, measure: "teaspoon", food: "crushed red pepper flakes",},
            { quantity: 1, measure: "pound", food: "boneless beef sirloin steak",},
            { quantity: 1, measure: "tbsp", food: "vegetable oil",},
            { quantity: 2, measure: "units", food: "large carrots jullienne",},
            { quantity: 1/2, measure: "cup", food: "green onions chopped",},
            { quantity: 1/2, measure: "cup", food: "unsalñted peanuts",},
            { quantity: 3, measure: "cups", food: "white rice cooked from day before",},
        ],
        cuisineType: "Asian",
        mealType: "Lunch",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Corned Beef Lasagna ",
        description: "Why not try a new lasagna recipe? \
        Replace ground meat with corned beef—a certified kid favorite—and watch your family finish a whole pan!", //just a short description of recipe
        instructions: "    Preheat an oven to 350° F.\
        In a large sauté pan, heat oil over medium heat. Sauté onion and garlic, until both are softened. Sprinkle Italian seasoning.\
        Mix up tomato paste and cook until pastiness has been cooked off. \
        Add diced tomatoes and water; stir to mix. Sprinkle salt, ground black pepper, and sugar.\
        Bring to a simmer. Add bouillon cube in mixture; stir to dissolve.\
        Remove from heat, and set aside. In a small bowl, mix mozzarella and Parmesan cheese. Set aside.\
        Spread ½ cup tomato sauce on the bottom of a 9-inch round baking dish. Place a layer of lasagna sheets.\
        Cover with tomato sauce, and sprinkle with mozzarella mix.\
        Place a layer of lasagna sheets.\
        Cover with tomato sauce, spread corned beef mixture over tomato sauce, and sprinkle mozzarella mix. Top with lasagna sheets.\
        Repeat with remaining lasagna sheets, tomato sauce, and end with mozzarella mix until baking dish is full.\
        Place in an oven and bake for 40 minutes, or until noodles are softened. Slice and serve hot and plain.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756380/test-project/corned-beef-lasagna_ehijcc.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 2, measure: "tbsp", food: "EVOO",},
            { quantity: 1, measure: "unit", food: "onion, diced",},
            { quantity: 1, measure: "unit", food: "grlic clove",},
            { quantity: 1, measure: "teaspoon", food: "italian seasoning",},
            { quantity: 1, measure: "teaspoon", food: "tomato paste",},
            { quantity: 1, measure: "teaspoon", food: "salt",},
            { quantity: 1, measure: "can", food: "diced tomatoes",},
            { quantity: 1/2, measure: "liter", food: "beef bouillon",},
            { quantity: 2, measure: "cup", food: "corned beef",},
            { quantity: 1/2, measure: "cup", food: "parmesan cheese, grated",},
            { quantity: 8, measure: "units", food: "lasagna sheets, uncooked",},
        ],
        cuisineType: "Italian",
        mealType: "Lunch",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Yellow Rice with Chickpeas",
        description: "Indians eat rice with many meals. \
        Pay careful attention when preparing this recipe to discover which spice causes the rice to turn yellow. ", //just a short description of recipe
        instructions: "In a fresh 3-quart saucepan over moderate heat, heat oil; add the onion and the potato. \
        Cook 5 minutes, stirring occasionally.\
        Add water, rice, salt, cumin seeds, and turmeric; over high heat, heat to boiling.\
        Reduce heat to low; cover and simmer 20 minutes, or until rice and potatoes are tender. \
        During the last 5 minutes of cooking, just mix with chickpeas. \
        Serve hot and plain but pair this turmeric-based rice dish with other main dishes.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756390/test-project/yellow-rice-chickpeas_q2vt0x.webp",
    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 2, measure: "tbsp", food: "canola oil",},
            { quantity: 1, measure: "unit", food: "onoin, chopped",},
            { quantity: 1, measure: "unit", food: "roasted potato diced",},
            { quantity: 3, measure: "cups", food: "water",},
            { quantity: 1, measure: "cup", food: "basmati rice",},
            { quantity: 3/4, measure: "tbsp", food: "salt",},
            { quantity: 1/2, measure: "tbsp", food: "cumin seeds",},
            { quantity: 1/4, measure: "tbsp", food: "ground turmeric",},
            { quantity: 1, measure: "unit", food: "canned chickpeas",},
        ],
        cuisineType: "Indian",
        mealType: "Lunch",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Hickory-smoked Barbecue Ribs",
        description: "Hickory-smoked Barbecue Ribs for lazy people", //just a short description of recipe
        instructions: "Mix liquid smoke and water in a large pot. Bring to a boil and add ribs.\
        Reduce heat and simmer 1 ½ to 2 hours. Remove and cool to room temperature.\
        Dip or brush with barbecue sauce.\
        Place ribs in a 400° F oven for 15 to 20 minutes. Serve hot and plain with rice.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756386/test-project/hickory-smoked-barbecue-ribs_cpxgcd.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 5, measure: "pound", food: "pork ribs",},
            { quantity: 1, measure: "bottle", food: "liquid smoke",},
            { quantity: 2, measure: "quart", food: "water",},
            { quantity: 1, measure: "bottle", food: "barbecue sauce",},
        ],
        cuisineType: "American",
        mealType: "Lunch",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Amish Pot Roast", //this is recipe name
        description: "This hearty dish is great for dinner or lunch. ", //just a short description of recipe
        instructions: "Sear the roast in 1 tablespoon oil on all sides in the oven.\
        Combine soy sauce, coffee, bay leaves, garlic, oregano and half of the sliced onions to make the sauce.\
        Put remaining onions on the meat, and pour the sauce over it.\
        Cover and roast 4 - 5 hours at 325° F.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756385/test-project/amish-pot-roast_ctmqfn.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 4, measure: "pound", food: "beef roast",},
            { quantity: 1, measure: "tbsp", food: "oil",},
            { quantity: 1/4, measure: "cup", food: "soy sauce",},
            { quantity: 1, measure: "cup", food: "coffee",},
            { quantity: 2, measure: "units", food: "bay leaves",},
            { quantity: 1, measure: "unit", food: "garlic clove",},
            { quantity: 1/2, measure: "tbsp", food: "oregano",},
            { quantity: 2, measure: "units", food: "onion sliced",},
        ],
        cuisineType: "British",
        mealType: "Lunch",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Thai Coconut Custard", //this is recipe name
        description: "This Thai delicacy is made with only 4 ingredients: coconut milk, eggs, palm sugar, and salt. ", //just a short description of recipe
        instructions: "    Beat everything together.\
        Cook, stirring, in a double boiler until it resembles soft scrambled eggs.\
        Pour into a small casserole dish.\
        Bake at 350° F for 30 minutes, then brown under the broiler.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756391/test-project/thai-coconut-custard_udej4d.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1, measure: "cup", food: "coconut milk",},
            { quantity: 6, measure: "units", food: "beaten eggs",},
            { quantity: 1, measure: "cup", food: "palm sugar",},
            { quantity: 1/2, measure: "teaspoon", food: "salt",},
        ],
        cuisineType: "Asian",
        mealType: "Teatime",
        dishType: "Desserts",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Tamaya Blue Cake", //this is recipe name
        description: "desseggggt!!!", //just a short description of recipe
        instructions: "Blend honey and butter.\
        Beat in the eggs one at a time.\
        Add the vanilla. Sift together dry ingredients.\
        Add and mix dry ingredients and shredded carrots alternately to the butter and honey mixture.\
        Do not over beat.\
        Butter 2 loaf pans and divide batter between them.\
        Bake at 350 degrees for 40-50 minute.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756388/test-project/tamaya-blue-cake_obvio9.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1, measure: "cup", food: "melted butter",},
            { quantity: 1, measure: "cup", food: "honey",},
            { quantity: 4, measure: "units", food: "eggs",},
            { quantity: 3, measure: "tbsp", food: "vanilla extract",},
            { quantity: 2, measure: "cup", food: "tamaya blue mix",},
            { quantity: 2, measure: "cup", food: "unbleached white flour",},
            { quantity: 1/2, measure: "tbsp", food: "baking soda",},
            { quantity: 1, measure: "tbsp", food: "baking powder",},
            { quantity: 1, measure: "tbsp", food: "allspice",},
            { quantity: 2, measure: "tbsp", food: "cinnamon",},
            { quantity: 2, measure: "cup", food: "shredded carrot in lemon juice",},
        ],
        cuisineType: "Eastern Europe",
        mealType: "Teatime",
        dishType: "Desserts",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Chocolate Granita", //this is recipe name
        description: "This is a refreshing treat, perfect for the Spring and Summer. ", //just a short description of recipe
        instructions: "In a medium saucepan, combine first three ingredients. \
        Cook over medium-low heat just until mixture starts to bubble at edges. \
        Cook, whisking, until slightly thickened, about one minute. Cool.\
        Freeze as directed below. Spoon into serving dishes, garnish with mint and whipped cream if desired, and serve immediately. ", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756378/test-project/chocolate-granita_twepzn.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 4, measure: "cup", food: "water",},
            { quantity: 1, measure: "cup", food: "unsweetened cocoa",},
            { quantity: 4, measure: "unit", food: "fresh mint springs",},
            { quantity: 4, measure: "tbsp", food: "whipped cream, optional",},
        ],
        cuisineType: "Kosher",
        mealType: "Teatime",
        dishType: "Biscuits and cookies",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Frozen Grape Pops", //this is recipe name
        description: "This stone-cold fruit popsicle is made with only 2 ingredients - grapes and real fruit juice.\
        But you can afford to pair this popsicle with other fruits or desserts.", //just a short description of recipe
        instructions: "    Fill popsicle molds more than halfway with seedless grapes.\
        Add orange or grape juice, filling molds almost to the top.\
        Freeze until hard. Sell per piece, if desired. Serve cold and plain or with other fruits or desserts.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756380/test-project/frozen-grape-pops_bydqqq.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 12, measure: "units", food: "seedless grapes",},
            { quantity: 4, measure: "cup", food: "orange juice",},
        ],
        cuisineType: "French",
        mealType: "Snack",
        dishType: "Desserts",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Lemon Bar Cookies", //this is recipe name
        description: "For fruit lovers! Made with real lemons, sugar, eggs, and flour, \
        this colorful dessert is great for breakfast or dessert, \
        delivers a sour aroma that it relishes, and has the biggest hint of fruit juice. ", //just a short description of recipe
        instructions: "Combine butter, sugar, flour, and salt and mix well.\
        Press mixture in a 9x13-inch greased pan.\
        Bake at 350° F for 15 minutes or until lightly browned.\
        Combine flour and sugar; mix up beaten eggs, lemon juice and rind. Pour onto the slightly cooled crust.\
        Bake at 350° F for 25 minutes or until the filling is set.\
        Cool and sprinkle with powdered sugar. Serve cold and plain or with other desserts.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756382/test-project/lemon-bar-cookies_lkwcob.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1, measure: "cup", food: "soft butter",},
            { quantity: 1/2, measure: "cup", food: "powdered sugar",},
            { quantity: 2, measure: "cup", food: "flour",},
            { quantity: 1, measure: "dash", food: "salt",},
            { quantity: 4, measure: "unit", food: "beaten eggs",},
            { quantity: 1/4, measure: "cup", food: "flour",},
            { quantity: 2, measure: "cup", food: "granulated brown sugar",},
            { quantity: 6, measure: "tbsp", food: "lemon juice",},
            { quantity: 2, measure: "unit", food: "grated lemon rind",},
        ],
        cuisineType: "Central Europe",
        mealType: "Teatime",
        dishType: "Biscuits and cookies",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Asian Garlic Shrimp", //this is recipe name
        description: "Garlic Shrimp with Noodles", //just a short description of recipe
        instructions: "In a wok or medium sized skillet, heat oil to medium-high heat.\
        Add garlic and stir-fry for 1 minute then add shrimp and stir-fry for another minute.\
        Add shredded carrot and stir-fry for 2–3 minutes or until shrimp is pink and cooked through.\
        Stir in cilantro, add salt and pepper to taste then serve over cooked noodles.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756374/test-project/asian-garlic-shrimp_h8diw6.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1, measure: "tbsp", food: "vegetable oil",},
            { quantity: 3, measure: "units", food: "garlic cloves",},
            { quantity: 1, measure: "pound", food: "medium shrimp raw, peeled, deveined",},
            { quantity: 1/2, measure: "cup", food: "shredded carrot",},
            { quantity: 2, measure: "tbsp", food: "cilantro",},
            { quantity: 1/4, measure: "tbsp", food: "salt and pepper",},
        ],
        cuisineType: "Chinese",
        mealType: "Dinner",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Ginisang Sitaw", //this is recipe name
        description: "This fresh, traditional Filipino dish starts with real pork, vegetables, shrimp paste, green beans, \
        and shrimp, and delivers a red-hot, meaty flavor. \
        Chili oil, garlic powder, and onion powder occasionally work for this, too. ", //just a short description of recipe
        instructions: "Saute garlic and onion in hot vegetable oil as usual. Add bagoong and stir.\
        Add the pork and stir until slightly brown.\
        Add the sitaw and keep stirring until coated with oil.\
        Add the shrimps (if overcooked, then shrimps tend to be tough).\
        Cover the entire pot and let cook for a couple of minutes.\
        Just check when it gets too dry and keep stirring. Add ¼ cup water if it dries up to prevent burning.\
        Cook until string beans are tender but still crisp. \
        Serve with hot, steamed, plain white or jasmine rice, as well as with any main dish or side dish.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756380/test-project/ginisang-sitaw_lkwnky.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 2, measure: "tbsp", food: "vegetable oil",},
            { quantity: 2, measure: "unit", food: "mashed garlic clove",},
            { quantity: 1, measure: "unit", food: "onion",},
            { quantity: 1, measure: "tbsp", food: "bagoong alamang",},
            { quantity: 1/2, measure: "cup", food: "cubed pork",},
            { quantity: 1/2, measure: "cup", food: "peeled and deveined shrimp",},
            { quantity: 1, measure: "bundle", food: "sitaw",},
            { quantity: 1/4, measure: "cup", food: "water",},
        ],
        cuisineType: "Asian",
        mealType: "Dinner",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Basic Schnitzel", //this is recipe name
        description: "Schnitzel is a traditional Hungarian and German cutlet. ", //just a short description of recipe
        instructions: "Get your cut of meat ready, and use the meat tenderizer to thin the meat and make it about 1/4 inch thick, \
        then add salt and pepper to the meat. Place cling wrap over the meat until you are ready to coat it.\
        Get 3 bowls, fill one with flour, one with two eggs, and one with bread crumbs. \
        Make sure to put your oil in a pot now, and turn the heat up to medium.\
        Whisk the two eggs until they look like just yellow liquid.\
        Remove your cling wrap from the meat.\
        Dip the meat in the flour, then the eggs, then the bread crumbs thoroughly. \
        At this point the oil should be hot enough to fry your meat and make it schnitzel. \
        To make sure it is, drop some bread crumbs in there and see if it starts sizzling.\
        Do not wait any further, put your meat inside the oil. Cook it for 2-3 minutes on each side.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756373/test-project/basic-schnitzel_rgpgyh.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 4, measure: "units", food: "cutlet",},
            { quantity: 1, measure: "cup", food: "flour",},
            { quantity: 2, measure: "unit", food: "egg",},
            { quantity: 1, measure: "cup", food: "breadcrumbs",},
            { quantity: 1, measure: "cup", food: "frying oil",},
            { quantity: 1, measure: "tbsp", food: "salt and pepper",},
        ],
        cuisineType: "Eastern Europe",
        mealType: "Dinner",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Brown Rice Curry ", //this is recipe name
        description: "A red-hot combination of brown rice and curry powder is made with real vegetables, \
        cooked to fresh perfection, and served with other meals. \
        Keep the stock absorbed into the rice so when you wake up and yawn, \
        all you have to do is pair this curry-based rice dish with other main dishes. ", //just a short description of recipe
        instructions: "Add the fresh stock to a large pot and bring to a boil.\
        Add all the ingredients before sautéing with the olive oil.\
        Reduce to a simmer. Cover and cook until stock has been absorbed into rice.\
        Average cooking time is 60 minutes. Let stand for 10 minutes and fluff with a fork. \
        Serve hot and plain but pair this curry-based rice dish with other main dishes in a large plate.", // how to make the reicpe
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756378/test-project/brown-rice-curry_ftviud.webp",    
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 1, measure: "cup", food: "brown rice uncooked",},
            { quantity: 2, measure: "cup", food: "stock, vegetable or chicken",},
            { quantity: 1, measure: "unit", food: "onion, finely chopped",},
            { quantity: 1, measure: "unit", food: "green pepper, finely chopped",},
            { quantity: 3, measure: "unit", food: "garlic cloves, finely chopped",},
            { quantity: 2, measure: "tbsp", food: "EVOO",},
            { quantity: 1/2, measure: "tbsp", food: "garlic powder",},
            { quantity: 1/2, measure: "tbsp", food: "onion powder",},
            { quantity: 2, measure: "tbsp", food: "curry powder",},
        ],
        cuisineType: "Asian",
        mealType: "Dinner",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    
    {
      recipe: {
        label: "Chicken and Spinach ", //this is recipe name
        description: "Chicken. And spinach.", //just a short description of recipe
        instructions: "Boil the spinach, strain them and set them aside. \
        Fry the chicken legs and once they are browned add the wine continue braising until the wine boils dry a little.\
        Remove the legs and set aside the sauce left over. \
        Make béchamel stir fry the grated onion a little and once it is browned add the flour, milk, nutmeg and remaining sauce from the chicken.\
        The béchamel should not thicken too much, add more milk if needed. \
        Add salt. Place the spinach in an oven dish, place the chicken on top, cover it with the béchamel and lastly sprinkle it with grated cheese.\
        Place them in the oven to gratin.",
        imageUrl: "https://res.cloudinary.com/alice-01/image/upload/v1654756386/test-project/chicken-spinach_wglo3k.webp",
        ingredients: [
    // every single ingredient goes in a single object, like here below
            { quantity: 4, measure: "units", food: "boneless chicken legs",},
            { quantity: 1, measure: "cup", food: "white wine",},
            { quantity: 1, measure: "bag", food: "spinach",},
            { quantity: 1, measure: "tbsp", food: "EVOO",},
            { quantity: 1, measure: "teaspoon", food: "salt",},
            { quantity: 2, measure: "tbsp", food: "flour",},
            { quantity: 2, measure: "cup", food: "milk",},
            { quantity: 1, measure: "unit", food: "small scallion",},
            { quantity: 1, measure: "pinch", food: "nutmeg",},
            { quantity: 1, measure: "cup", food: "grated cheese",},
        ],
        cuisineType: "Mediterranean",
        mealType: "Dinner",
        dishType: "Main course",
      },
      //owner: { type: Schema.Types.ObjectId, ref: "User" },
      //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
      //favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
      //recipeId: String,
      //created: {
        //type: Date,
        //default: new Date(),
      },
    ]
    
    module.exports = recipes;