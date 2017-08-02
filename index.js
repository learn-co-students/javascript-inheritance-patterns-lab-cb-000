//POINT FUNCTION
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = () => {
    return(this.x + ", " + this.y)
  }
}

//SIDE FUNCTION
function Side(length) {
  this.length = length
}

//SHAPE FUNCTIONS
function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x,y) {
  this.position.x = x;
  this.position.y = y;
}

//CIRCLE FUNCTIONS
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
  this.diameter = () => {
    return(radius * 2);
  }
  this.area = () => {
    return(Math.PI * radius * 2);
  }
  this.circumference = () => {
    return(2 * Math.PI * radius);
  }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//POLYGON FUNCTIONS
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  return(this.sides.map((side) => {
    return side.length
  }).reduce((total, length) => {
    return total + length
  }));
}
Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

//QUADRILATERAL FUNCTIONS
function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  Polygon.call(this, [
    new Side(sideOne),
    new Side(sideTwo),
    new Side(sideThree),
    new Side(sideFour)
  ]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

//RECTANGLE FUNCTIONS
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return(this.width * this.height);
}

//SQUARE FUNCTIONS
function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
  var properties = [];
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      properties.push(prop);
    }
  }
  return(properties.join(", "))
}

//TRIANGLE FUNCTIONS
function Triangle(sideOne, sideTwo, sideThree) {
  Polygon.call(this, [
    new Side(sideOne),
    new Side(sideTwo),
    new Side(sideThree)
  ]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
