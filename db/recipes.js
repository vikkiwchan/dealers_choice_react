const recipes = [
  {
    title: 'Rotisserie Chicken Panzanella',
    author: 'Sam Sifton',
    vegOrMeat: 'meat',
    detail:
      'Grab a super-tanned rotisserie chicken on the way home. Tear the meat into strips, then cut a few smallish supermarket tomatoes (or better, if you’ve got them) into wedges and marinate them in oil, salt, pepper and red wine vinegar. Pay a few bills or fold some laundry, then turn the whole thing into panzanella by mixing together the chicken, the tomatoes, some fresh watercress and some chunks of stale or toasted bread, then showering the salad with freshly ground black pepper and a spray of kosher salt. This, too, is cooking.',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17NORECIPE-PANZANELLA-CHICKEN/merlin_147763899_7052bf35-0ab6-44e9-aad1-58e9f463fa15-articleLarge.jpg',
  },
  {
    title: 'Quick-Roasted Chicken With Tarragon',
    author: 'Sam Sifton',
    vegOrMeat: 'meat',
    detail:
      'French elegance on the fly. Heat the oven to 425, or higher if your oven runs cool. Mix a few tablespoons of mayonnaise with a little Dijon mustard and a lot of chopped tarragon in a large bowl until everything’s incorporated to your liking. Salt and pepper some chicken thighs — I’d do bone-in, but boneless would also work — then add the thighs to the mustard mixture, tossing to coat the meat. Arrange the chicken on a greased sheet pan and cover each piece with a handful of bread crumbs, really pressing the crumbs in so they adhere.\nSlide that pan into the oven for a half-hour or so while you make some rice or boil off a few potatoes. You can make a salad, or steam some greens. Then check to see if the chicken has been cooked all the way through. Probably not. Another five or 10 minutes ought to do it. You’re looking for a nice crisp crust, golden brown, above the luscious meat.',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-dijonchicken/merlin_147764013_0adff151-60d4-4836-a9bc-59405c7c78bb-articleLarge.jpg',
  },
  {
    title: 'Italian Subs With Sausage and Peppers',
    author: 'Sam Sifton',
    vegOrMeat: 'meat',
    detail:
      "For these subs, you'll start with the onions, slicing two big sweet ones and setting them in a hot pan with a couple of gurgles of olive oil. Season with salt, black pepper and a shake of red-pepper flakes, then cook over medium heat, stirring and tossing occasionally so that they go golden and soft. This’ll take a while. Add a couple of sliced bell peppers to the pan, and continue cooking, still stirring and tossing, until they begin to wilt. Set the vegetables aside. About halfway through, set some sweet Italian sausages in another hot, oil-slicked pan, and cook them through until crisp and brown on the exterior, turning often.\nSplit your sub rolls (I like the sesame-seeded variety here) and scrape out a little of the interior from each. Load one side of each roll with some of the onions and peppers, the other with a sausage. Top with mozzarella, put the open sandwiches on a sheet pan and slide them all into a hot oven for five minutes or so, until the cheese is melted and the bread is lightly toasted. Fold together and serve.",
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17NORECIPE-ITALIAN-SUBS/merlin_148099983_04698c2d-7d15-4c22-a47d-33c134d7ddb9-articleLarge.jpg',
  },
  {
    title: 'Steak Tacos With Pineapple Salsa',
    author: 'Sam Sifton',
    vegOrMeat: 'meat',
    detail:
      'Get some fresh tortillas and a pound of skirt steak, then make salsa from mostly fresh or canned pineapple, pickled jalapeños and a healthy couple shakes of chile powder, along with plenty of chopped cilantro. Shower the steaks with salt and pepper, and broil them for 2 to 3 minutes a side until they’re perfect and rare. Warm the tortillas. Grate some Cheddar. Rest the steak, slice it, and serve with the tortillas, cheese and that awesome salsa. Anyone want to watch a movie after dinner? We have time.',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-steaktacos/merlin_147664878_12735fd9-c72a-4c58-a55b-5933bea1c6d6-articleLarge.jpg',
  },
  {
    title: 'Quick-Broiled Pork Chops With Peanuts and Gochujang',
    author: 'Sam Sifton',
    vegOrMeat: 'meat',
    detail:
      'Here’s a nice Wednesday-night meal. Secure the thinnest chops you can find at the store — that’s crucial for the quick-broil part. Throw a few handfuls of dry-roasted peanuts in a pan set over medium-high heat with a glug of sesame oil. Let those go until they’re fragrant and just beginning to darken, then take them off the heat and toss with a few shakes of chile powder. Set the peanuts aside and heat your broiler. Line a sheet pan with foil, and oil it lightly. Salt and pepper your chops, lay them out on the pan, and slide them into the oven. Cook the chops for around four minutes, then flip them over to finish. Meanwhile, mix a tablespoon or so of gochujang, the Korean red-pepper paste, with a healthy splash of orange juice and a wisp of mirin. Taste. Adjust. Pour into a deep serving dish or platter. When the chops are well crusted and brown, slide them into the sauce for a toss. Top with the peanuts and some chopped scallions if you have any. Rice on the side.',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17NORECIPE-GOCHUJANG-PORK-CHOPS/17NORECIPE-GOCHUJANG-PORK-CHOPS-articleLarge.jpg',
  },
  {
    title: 'Fettuccine With Ricotta and a Fistful of Mint',
    author: 'Sam Sifton',
    vegOrMeat: 'vegetarian',
    detail:
      'Set a pot of nicely salted water over high heat to boil. When it does, add the fettuccine, then get the rest of your dinner ready as it cooks to al dente. Chop up a fistful of mint and a small shallot if you have one (half a small onion if you don’t), mixing them into a cup or two of fresh ricotta, then loosening the mixture with a healthy drizzle of extra-virgin olive oil and a squeeze of lemon juice. Add some salt and pepper to taste, perhaps a shake of red pepper. When the pasta’s done, which’ll be about the same time as you’re done with the sauce, drain it in a colander and add it to a big warm bowl, then fold the cheese into it, mixing gently. Serve to adoration.',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-fettuccine/merlin_147764622_e8fdd236-fcf7-49d6-b21c-2468457e1c22-articleLarge.jpg',
  },
  {
    title: 'Grilled Broccoli With Soy Sauce, Maple Syrup and Balsamic Vinegar',
    author: 'Sam Sifton',
    vegOrMeat: 'vegetarian',
    detail:
      'This is good one to have in your back pocket when you’re cooking burgers and dogs on the grill; it’s a no-recipe version of a dish that I first learned of from the Brooklyn restaurateur Joe Carroll. Toss broccoli florets in equal parts soy sauce and balsamic vinegar, a generous dash of maple syrup and a splash of neutral oil, then grill (or broil) until they’re soft and crunchy. Serve them under a scattering of red-pepper flakes and sesame seeds, or use furikake, a Japanese seasoning blend that contains, in addition to sesame, chopped seaweed, sugar, salt and, occasionally, monosodium glutamate. Never mind hot dogs or anything else, actually. I could go for that broccoli on white rice and call it dinner, full stop.',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-broccoli/17norecipe-broccoli-articleLarge.jpg',
  },
  {
    title: 'Mushroom Toast With Pea Purée',
    author: 'Sam Sifton',
    vegOrMeat: 'vegetarian',
    detail:
      'Take a bag of frozen organic peas and heat them in a little bit of boiling water for a couple of minutes to get them warm and cooked through, then drain them off and whiz them in a food processor with a hit of olive oil, some lemon juice and, if you have any, some tarragon leaves, until it resembles a thickish purée. Next, sauté a bunch of thick-sliced portobellos (count on about two mushrooms per person) in a lot of butter with a little bit of garlic. Really cook those down. Finally, make toast from hefty slices of your favorite bread, spread them with the pea purée, top with the mushrooms and — dinner!',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17NORECIPE-MUSHROOM-PEA-PUREE/17NORECIPE-MUSHROOM-PEA-PUREE-articleLarge.jpg',
  },
  {
    title: 'Kale Salad With Cranberries, Pecans and Blue Cheese',
    author: 'Sam Sifton',
    vegOrMeat: 'vegetarian',
    detail:
      'How about a kale salad? (Stick with me, please.) Just make a mustardy vinaigrette that’ll stand up to the greens — mustard, olive oil, a splash of lemon juice, salt and pepper — then drizzle it over clean, chopped kale with a host of big-flavored mix-ins that wink at whatever season you’re in without being dorky about it: dried cranberries or currants, say; pecans toasted with maple syrup and a pinch of cayenne; some crumbled blue cheese; a spray of croutons. Sweet, salty, spicy, sour. That and a chilled glass of red wine? Why don’t we eat salads for dinner more often?',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17NORECIPE-KALE-SALAD/merlin_147765615_0853b467-3319-4fec-a410-63c6482c9bf9-articleLarge.jpg',
  },
  {
    title: 'Grilled Cheese With Jalapeño, Tomato and Fried Egg',
    author: 'Sam Sifton',
    vegOrMeat: 'vegetarian',
    detail:
      'Sometimes I get it into my head to make a fancy grilled cheese sandwich. I don’t have a recipe because you don’t really need a recipe to make grilled cheese sandwiches. You just need desire, and a triangle in your head: salt; crunch; melting ooze. So I’ll slice some mild Cheddar. Get some decent bread, a sliced jalapeño, the tail end of a beefsteak tomato. Then, sizzle-sizzle-flip-flip in some unsalted butter, and top with a sunny-side-up egg. It’s the simplest kind of cooking, and on a weeknight that’s exactly what most of us need. Make grilled cheese!',
    imgUrl:
      'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-grilledcheese/17norecipe-grilledcheese-articleLarge.jpg',
  },
];

module.exports = {
  recipes: recipes,
};
