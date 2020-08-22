/*
============================================
; Title:  Assignment 3.2
; Author: Professor Massoud
; Modified: Micah Connelly
; Date: 8/22/2020
; Description: Assignment 3.2 - The Factory Pattern
;===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 3.2'));

// start program
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
    this.version = properties.version || 2.1
}

function Informix(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Informix;

DatabaseFactory.prototype.createDatabase = function (properties) {
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } else {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "user123",
    password: "password"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "agent007",
    password: "license2cool"
});1

console.log(oracle, informix);

// end program
