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

function Polygon(...sides) {
	this.sides = sides
	Shape.call(this);
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon