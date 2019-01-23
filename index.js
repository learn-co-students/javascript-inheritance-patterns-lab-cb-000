function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = (x,y) => { return(`(${this.x}, ${this.y})`) }
}
Point.prototype.constructor = Point;

function Shape() {
}
Shape.prototype.constructor = Shape;
Shape.prototype.addToPlane = function(x,y) { this.position = new Point(x,y)}
Shape.prototype.move = function(x,y) { this.position = new Point(x,y)}
 

function Side(length) {
  this.length = length;
}
Side.prototype.constructor = Side;

function Circle(r) {
  Shape.call(this);
  this.radius = r;
}
//inherit from Shape prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() { return 2*this.radius}
Circle.prototype.area = function() { return Math.PI*this.radius*this.radius}
Circle.prototype.circumference = function() { return Math.PI*2*this.radius}
 
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}
//inherit from Shape prototype
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() { return this.sides.reduce((tot, n)=>{return tot+n.length}, 0)}
Polygon.prototype.numberOfSides = function() { return this.sides.length }

function Quadrilateral(side1,side2,side3,side4) {
  var sides = [];
  sides[0] = new Side(side1);
  sides[1] = new Side(side2);
  sides[2] = new Side(side3);
  sides[3] = new Side(side4);
  Polygon.call(this, sides);
}
//inherit from Polygon prototype
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(side1,side2,side3) {
  var sides = [];
  sides[0] = new Side(side1);
  sides[1] = new Side(side2);
  sides[2] = new Side(side3);
  Polygon.call(this, sides);
}
//inherit from Polygon prototype
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Quadrilateral.call(this, this.width,this.height,this.width,this.height);
}
//inherit from Polygon prototype
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() { return this.width*this.height}

function Square(length) {
  //call Rectangle constructor
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() { return Object.getOwnPropertyNames(this).join(", ")};

 
