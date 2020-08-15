/*
============================================
; Title:  Assignment 2.2
; Author: Professor Massoud
; Modified: Micah Connelly
; Date:   8/15/2020
; Description: Assignment 2.2 - Prototypes
;===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 2.2'));

//start program

//obj literal
var getInfo = {
    //function
    getAge: function () {
        //output name
        console.log(`This person's full name is ${this.name}`);
    }
};

//defining human variables
var findHuman = Object.create(getInfo, {
    "age": {
        "value": 32,
        enumerable: true
    },
    "name": {
        "value": "Micah Connelly"
    }
});

//call function
findHuman.getAge();

//output age
console.log(`This person's age is ${findHuman.age}`);

//end program