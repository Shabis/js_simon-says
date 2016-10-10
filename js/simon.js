function Simon(color) {
  this.color = color;
  this.counter = 1;
  this.colorAt();
  this
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
