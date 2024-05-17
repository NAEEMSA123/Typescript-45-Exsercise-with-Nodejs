"use strict";
// Task 45
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", "Corolla", { coloe: 'Silver', year: "2024" });
console.log(myCar);
