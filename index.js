function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Side(length) {
  this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y);
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius ** 2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

function Polygon (array) {
  Shape.call(this);
  this.sides = array


}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function () {
  var total = 0
  for (var i = 0; i < this.sides.length; i++) {
    total += this.sides[i].length
  }
  return total
}
Polygon.prototype.numberOfSides = function () {
  var count = 0
  for (var side in this.sides) {
    count++
  }
  return count
}

function Quadrilateral (s1, s2, s3, s4) {
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]);

}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle (s1, s2, s3) {
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)]);

}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle (width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square (length) {
  Rectangle.call(this, length, length)
  this.length = length


}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  for (var prop in this) {
  if(this.hasOwnProperty(prop)) {
    console.log("square." + prop + " = " + this[prop]);
  }
}
}
