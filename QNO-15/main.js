"use strict";
let guestList = ["Naeem", "Shuraim", "Sarim", "Abiyan"];
let dontCome = guestList[0];
console.log(dontCome, "Nhi a Skhta");
guestList.splice(0, 1, "Javed");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
