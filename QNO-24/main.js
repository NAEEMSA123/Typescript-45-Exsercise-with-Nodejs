"use strict";
// Defaine veriable
let mango = "mango";
let upperCaseMango = "Mango";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "banana", "orange"];
// test for equality and inequality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("\nIs mango is not equal to mango");
console.log(mango != "mango");
// Tests using lowercase function
console.log("\nIs Mango is equal to apple after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() == "mango");
console.log(upperCaseMango.toLowerCase() != "mango");
//Numerical tests 
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);
// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
//Tests using "and" & "or" operators
// using && (AND)
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 30);
// using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Tests wheater an item is include in arrey
console.log("is orange include in my fruits arrey");
console.log(fruits.includes("orange"));
// not include
console.log("is orange include in my fruits arrey");
console.log(!fruits.includes("orange"));
