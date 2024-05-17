
// QNO 18;

// making a arrey of countries and print its orignil order 

let countriesToVisit: string[] = ["China","Saudia","Brazil","Afganistan"];

console.log("Original Order:", countriesToVisit);

//print the Arrey is still in its original order

console.log("Alphabetical order:",[...countriesToVisit].sort());

// Show that the arrey is still in its Original order
console.log("Still in Orignil Order :", countriesToVisit);

// print the Arrey in Reverse Order without modifing the Actual Arrey List
console.log("Reverse Order:",[...countriesToVisit].reverse());

// Show that the Arrey is still in the orignil order
console.log(" Still in Original Order:", countriesToVisit);

// we haveChange the orignil Arrey Order 
console.log("Orignil Arrey Reversed:", countriesToVisit.reverse());

// print the arrey to show that its back to its orignil order
console.log("Back to Orignil Order:", countriesToVisit.reverse());

// print the Arrey the show that its order has be changed in Alphabetical order now
console.log("Sorted in Alphabetical Order :",countriesToVisit.sort());

// we have changed again the orignil Arrey Order now

console.log("Orignil Arrey Reversed Again:", countriesToVisit.reverse());





