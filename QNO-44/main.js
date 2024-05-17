"use strict";
// Define a function with a rest parameter that accept items argments representing our Sanwich
function makeSandWich(...item) {
    console.log("\nMaking a sandwich with the following items: \n");
    item.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 items which 3 different number of arguments
makeSandWich("Chicken", "Cheese", "Beef", "Egg");
makeSandWich("Bread", "Butter");
makeSandWich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Tomato");
