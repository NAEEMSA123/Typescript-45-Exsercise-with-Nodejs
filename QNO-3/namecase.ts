// 3. Name Cases: 
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase


let person_name = "Naeem AHmed";

// lowerCase
console.log("Lowercase:", person_name.toLowerCase());

// UpperCase

console.log("Uppercase:", person_name.toUpperCase());

// TitleCase

console.log("Titlecase:", person_name.replace(/\bw/g,c => c.toLocaleUpperCase() ));