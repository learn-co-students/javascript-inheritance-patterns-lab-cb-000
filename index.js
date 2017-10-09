function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  var x = this.x;
  var y = this.y;
  return `(${x},${y})`
}

function Side(length) {
  this.length = length;
}

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

Shape.prototype.addToPlane = function(x, y) {
  this.x = x;
  this.y = y;
  this.position = new Point(x, y);
  return this.position;
}

Shape.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
  this.position = new Point(x, y);
  return this.position;
}

function Polygon(sides) {
  this.sides = sides;
  this.numberOfSides = function() {
    return this.sides.length;
  }

}

Polygon.prototype = Object.create(Shape.prototype); //my order was wrong, I had this at the bottom.
Polygon.prototype.constructor = Polygon;


Polygon.prototype.perimeter = function() { //I also had this in the wrong place.
  //goes after prototype statements
  var p = 0

  for (let i = 0; i < this.sides.length; i++) {

    p += this.sides[i].length;
  }
  return (p);
}

function Circle(radius) {
  this.radius = radius;
  this.diameter = function() {
    return (2 * this.radius);
  }
  this.area = function() {
    return (Math.PI * (Math.pow(this.radius, 2)));
  }
  this.circumference = function() {
    return (2 * Math.PI * this.radius);
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Quadrilateral(s1, s2, s3, s4) {
  this.s1 = new Side(s1);
  this.s2 = new Side(s2);
  this.s3 = new Side(s3);
  this.s4 = new Side(s4);
  this.sides = [this.s1, this.s2, this.s3, this.s4];
  this.numberOfSides = function() {
    return this.sides.length;
  }
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


function Rectangle(width, height) {

  this.width = width;
  this.height = height;
  this.sides = [this.width, this.height, this.width, this.height];


}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.perimeter = function() {
  var p = 0;

  p = (this.sides[0] + this.sides[1] + this.sides[2] + this.sides[3]) || (
    this.length * 4);

  // p += this.sides[i];



  return p;
}

Rectangle.prototype.numberOfSides = function() {
  return 4;
}
Rectangle.prototype.area = function() {
  if (this.hasOwnProperty(length)) {
    return Math.pow(this.length, 2);

  } else {
    return this.width * this.height;
  }
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;

  this.sides = [this.length];
  this.numberOfSides = function() {
    return Rectangle.prototype.numberOfSides();
  }
  this.listProperties = function() {
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        return prop;
      }
    }
  }

}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;


function Triangle(x, y, z) {

  this.s1 = new Side(x);
  this.s2 = new Side(y);
  this.s3 = new Side(z);
  Polygon.call(this, [this.s1, this.s2, this.s3])

}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
