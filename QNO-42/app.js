"use strict";
// Define a function t print each magicians name from an Array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an Array containing magicians name
let magician_names = ["Harry poter", "Hamza", "Usman"];
let great_magicians = make_great(magician_names);
show_magicians(great_magicians);
