/*
============================================
; Title:  Assignment 1.3
; Author: Micah Connelly
; Date:   8/8/2020
; Description: assignment 1.3
;===========================================
*/

/*
; Assigment instructons
; Using functions, create a cell phone object with the following properties / methods
; Manufacturer
; Model
; Color
; Price
; getPrice()
; getModel()
; getDetails()
; The getPrice() function will return the cell phones price.
; The getModel() function will return the cell phones model
; The getDetails() function must call the getPrice() and getModel() functions and output the Manufacturer, Model, Color, and Price
; Instantiate a new cell phone object (supply your own default values) and call the getDetails() function.
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 1.3'));

// Function and object
function cellPhoneObj(man, mod, col, pri) {
    this.manufacturer = man,
    this.model = mod,
    this.color = col,
    this.price = pri
};

// Methods
cellPhoneObj.prototype = {
  getModel: function () {
      return this.model;
    },

  getPrice: function () {
      return this.price;
    },

   getDetails: function () {
      return 'Manufacturer: ' + this.manufacturer + '\n' + 'Model: ' + this.getModel() + '\n' + 'Color: ' + this.color + '\n' + 'Price: ' + this.getPrice();
    }
}

//Instantiate object
var myPhone = new cellPhoneObj('Apple', 'iPhone 11 Pro', 'black', '$999');

//output
console.log('--DISPLAYING CELL PHONE DETAILS --' + '\n' + myPhone.getDetails());