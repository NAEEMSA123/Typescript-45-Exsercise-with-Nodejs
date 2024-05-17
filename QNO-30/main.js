"use strict";
let userNames = ["Naeem", "Ali", "Shuraim", "Sarim", "Abiyan"];
// Using ForEach loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Sarim") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again`);
    }
});
