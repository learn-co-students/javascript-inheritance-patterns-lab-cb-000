// Point //
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

// Shape //
function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

// Circle //
function Circle(radius){
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.diameter = function(){
  return this.radius * 2
}
Circle.prototype.area = function(){
  return (Math.PI * this.radius ** 2)
}
Circle.prototype.circumference = function(){
  return (2 * Math.PI * this.radius)
}

// Polygon //
function Side(length) {
  this.length = length;
}

function Polygon(sides) {
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.perimeter = function() {
  let per = 0;
  for(let i = 0; i < this.sides.length; i++) {
    per += this.sides[i].length;
  }
  return per;
}

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

// Quadrilateral //

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength){
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength),])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

// Triangle //
function Triangle(sideOne, sideTwo, sideThree) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree)])
}

Triangle.prototype = Object.create(Polygon.prototype)

// Rectangle //
function Rectangle(width,height){
  Quadrilateral.call(this, width, height, width, height)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
  return this.width * this.height;
}


// Square //
function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}