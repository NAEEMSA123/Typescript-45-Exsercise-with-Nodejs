"use strict";
// Qno 16;
// Creating a Guest List  paste Arrey
let guestList = ["Naeem", "Shuraim", "Sarim", "Abiyan"];
// making veriable for those guest who cant come
let dontCome = guestList[0];
//print the name of guest who cant come 
console.log(dontCome, "Nhi ah sakhty hai");
// Add or remove value from Guest List Arrey
guestList.splice(0, 1, "javed");
// message print for Bigger Table
console.log("Good news !  we have Found a Bigger Table For Each Dinner");
// Adding a new value at starting index of Arrey
guestList.unshift("Amir");
// Adding a new guest at ending index of arrey
guestList.push("Zahid");
// Adding a new guest at middle index of arrey
let middleList = Math.floor(guestList.length / 2);
guestList.splice(middleList, 0, "Osama");
console.log("update List of our Guests");
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
