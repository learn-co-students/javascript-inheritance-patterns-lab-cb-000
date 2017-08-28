function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return(this.x + ", " + this.y);
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x,y) {
  this.position.x = x;
  this.position.y = y;
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return 2 * this.radius;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

function Side(length) {
  this.length = length;
}

function Polygon(sides) {
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(sum, side) {
    return sum + side.length;
  }, 0);
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(sideLengthOne, sideLengthTwo, sideLengthThree, sideLengthFour) {
  Polygon.call(this, [new Side(sideLengthOne), new Side(sideLengthTwo), new Side(sideLengthThree), new Side(sideLengthFour)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideLengthOne, sideLengthTwo, sideLengthThree) {
  Polygon.call(this, [new Side(sideLengthOne), new Side(sideLengthTwo), new Side(sideLengthThree)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Quadrilateral.call(this, width, height, width, height);
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.height * this.width;
}

function Square(length) {
  this.length = length;
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var str = '';
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      str = str + (", Square." + prop + " = " + this[prop]);
    }
  }
  return str;
}
