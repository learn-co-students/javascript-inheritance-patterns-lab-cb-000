function Point (x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
    return `(${this.x},${this.y})`;
}
function Side(length) {
  this.length = length;
}

function Shape () {}

Shape.prototype.addToPlane = function(x,y) {
    this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x, y);
}

function Circle (radius) {
  Shape.call(this);
  this.radius = radius;
  this.diameter = function() {
      return this.radius * this.radius;
    }
    this.area = function() {
      return Math.PI * this.radius ** 2;
    }
    this.circumference = function() {
      return Math.PI * this.diameter();
    }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var p = 0;
  for (let i = 0; i < this.numberOfSides(); i++) {
    p += this.sides[i].length;
  }
  return(p);
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function () {
  return this.width * this.height;
}

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength);
  this.sideLength = sideLength;
  this.listProperties = function() {
    let propertyList = "";
    for (const property in this) {
      if (this.hasOwnProperty(property)) {
        propertyList += this[property];
      }
    return propertyList;
    }
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function Triangle(side1, side2, side3){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
