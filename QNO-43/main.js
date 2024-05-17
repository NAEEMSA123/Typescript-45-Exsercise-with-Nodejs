"use strict";
// Define a function t print each magicians name from an Array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an Array containing magicians name
let magician_names = ["Harry poter", "Hamza", "Usman"];
// Making a copy of original array .Slice() function
let copy_magician_names = magician_names.slice();
// Modify the copy array to include the great with their names
let copy_great_magicians = make_great(copy_magician_names);
// Show both arrays orignil and Copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
