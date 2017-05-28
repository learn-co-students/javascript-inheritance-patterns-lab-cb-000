function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ", " + this.y;
}

function Side(length) {
	this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
	this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
	this.addToPlane(x,y)
}

function Circle(radius) {
	this.radius = radius
	this.diameter = function() {
		return this.radius * 2
	}
	this.area = function() {
		return Math.PI * this.radius^2
	}
	this.circumference = function() {
		return Math.PI * this.diameter()
	}
}

Circle.prototype = Object.create(Shape.prototype);

function Polygon(sides) {
  Shape.call(this);
	this.sides = sides;
  this.numberOfSides = function() {
    return sides.length;
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, height, width, height, width)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(side) {
  Rectangle.call(this, side, side)
  this.listProperties = function() {
    for (var prop in this) {
      if(this.hasOwnProperty(prop)) {
        console.log(this + prop + " = " + this[prop]);
      }
    }
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function Triangle (side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle;
