/*
============================================
; Title:  Assignment 1.4
; Author: Professor Krasso
; Modified by: Micah Connelly
; Date:   8/8/2020
; Description: assignment 1.4
;===========================================
*/

/*
; Assigment instructons
; Create a function constructor Car class with one parameter (model)
; Create a function constructor Truck class with two parameters (model, year)
; Create a function constructor Jeep class with three parameters (model, year, color)
; Add a prototype method to each class called “start” 
; – hint: review the duck typing example
; The prototype method should output “ added to the racetrack!”
; Define an empty racetrack array
; Create a driveIt function with one parameter (vehicle)
; From within the driveIt function call the “start” function on the vehicle – hint: vehicle.start and push the vehicle to the racetrack array
; Create three (3) vehicle classes and pass them through the driveIt() function
; Iterate over the racetrack array and output the results
*/


// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 1.4'));

//Functions
function truck(model, year) {
    this.model = model;
    this.year = year;
}
truck.prototype.start = function () {
    console.log('Truck added to the racetrack!');
}

function car(model) {
    this.model = model;
}
car.prototype.start = function () {
    console.log('Car added to the racetrack!');
}

function jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
jeep.prototype.start = function () {
    console.log('Jeep added to the racetrack!');
}

// Function to push vehicle to racetrack
function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

// Creating new instances of the objects
let Bronco = new truck("Bronco", "2021");
let Civic = new car("civic");
let Jeep = new jeep("Wrangler", "2021", "Yellow");

// Empty array
const racetrack = [];

// Methods
driveIt(Bronco);
driveIt(Civic);
driveIt(Jeep);

// Output
console.log(`\n-- The following vehicles have been added to the racetrack --`);
for (i = 0; i < racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + ': ' + racetrack[i].model);
};