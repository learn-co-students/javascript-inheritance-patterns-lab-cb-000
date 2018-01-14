function Side(length) {
  this.length = length;
}

function Point(x, y) {
  this.toString = function() {
    return `${x}, ${y}`;
  }
}

function Shape() {
  this.position = null;
}

Shape.prototype = Object.create(Shape.prototype);
Shape.prototype.constructor = Shape;
Shape.prototype.addToPlane = function(x, y) {
    this.position = new Point(x, y);
  }
Shape.prototype.move = function(x, y) {
  this.addToPlane(x, y);
}

function Circle(radius) {
  this.radius = radius;
}
  

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}
Circle.prototype.diameter = function() {
  return this.radius * 2;
}

function Polygon(sideArray) {
  this.sides = sideArray.map(s => s.length);
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(a, b) {
    return a + b;
  }, 0); 
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
  this.sideFour = sideFour;
  this.sides = [sideOne, sideTwo, sideThree, sideFour];
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideOne, sideTwo, sideThree) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
  this.sides = [sideOne, sideTwo, sideThree];
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.sides = [width, height, width, height];
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(length) {
  this.width = length;
  this.height = length;
  this.sides = [length, length, length, length]
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(`this.${prop} = ${this[prop]}`);
    }
  }
}




