// Define a function t print each magicians name from an Array

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() will modify array
function make_great(magicians:string[]){
   return magicians.map(name =>`The Great ${name}`)
}
// Define an Array containing magicians name
let magician_names = ["Harry poter","Hamza","Usman"]

// Call make graet function to modify magicians names
let great_magicians = make_great(magician_names)


// Call show_magicians that show modified list of magicians
show_magicians(great_magicians)


