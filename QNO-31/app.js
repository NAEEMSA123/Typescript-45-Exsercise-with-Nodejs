"use strict";
let userName = ["Naeem", "Shuraim", "Sarim", "Abiyan", "Urwa"];
// remove all values from our Array Now our Array is empty
userName = [];
// if Statement for checking Length of our Array is empty?
if (userName.length === 0) {
    console.log("Your Array in Empty we need to find some users! ");
}
else {
    // if Array is not empty Use ForEach loop on Array
    userName.forEach(oneUser => {
        if (oneUser === "Abiyan") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
