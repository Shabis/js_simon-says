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

$('#green').click(function(event) {

}
$('#blue').click(function(event) {

}
$('#yellow').click(function(event) {

}
$('#red').click(function(event) {
  
}




});
