// 6. Stripping Names: 
// Store a person’s name, and include some whitespace characters at the beginning and end of 
// the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
// once, so the whitespace around the name is displayed. Then print the name after striping the white 
// spaces.


let whiteSpace:string = "\t \n  Naeem Ahmed \t\n"


console.log("Name with whitespace:");

console.log("'" + whiteSpace + "'");

let name_stripped = whiteSpace.trim();


console.log("\nName after stripping whitespace:");

console.log("'" + name_stripped + "'"); 