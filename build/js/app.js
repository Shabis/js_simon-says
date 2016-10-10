(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Simon = require('../js/simon.js').simonModule;



$(document).ready(function() {
  $('.start').click(function(event) {
    debugger;
    event.preventDefault();
    var colorArray = [];
    var newSimon = new Simon("purple");
    var color = newSimon.getRandomColor();
    colorArray.push(color);
    console.log(colorArray);
  });
});

},{"../js/simon.js":2}],2:[function(require,module,exports){
function Simon(color) {
  this.color = color;
}


Simon.prototype.getRandomColor = function() {
  var RandomNumber = Math.floor((Math.random() * 4) + 1);
 if (RandomNumber === 1) {
   return "green";
 } else if (RandomNumber === 2) {
   return "blue";
 } else if (RandomNumber === 3) {
   return "yellow";
 } else {
   return "red";
 }
};




exports.simonModule = Simon;

},{}]},{},[1]);
