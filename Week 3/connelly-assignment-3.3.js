/*
============================================
; Title:  Assignment 3.3
; Author: Professor Massoud
; Modified: Micah Connelly
; Date: 8/22/2020
; Description: Assignment 3.3 - The Factory Pattern
;===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 3.3'));


// start program
var DatabaseSingleton = (function () {
    var instance;

    function databaseSingleTest() {
        var postgresDatabase100 = new Object("Database instance initialized!");
        var postgresDatabase200 = new Object("Database instance initialized!");

        return postgresDatabase100, postgresDatabase200;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = databaseSingleTest();
            }
            return instance;
        }
    }
    
})();

function databaseInit() {
    var postgresDatabase100 = DatabaseSingleton.getInstance();
    var postgresDatabase200 = DatabaseSingleton.getInstance();
    console.log("One database instance? " + (postgresDatabase100 === postgresDatabase200));
}

databaseInit();
// end program