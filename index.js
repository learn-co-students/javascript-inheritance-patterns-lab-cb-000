function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = () => {
    return `(${this.x},${this.y})`
  }
}

function Side(length) {
  this.length = length;
}

function Shape() {
  this.addToPlane = (x, y) => {
    this.position = new Point(x, y);
  }
  this.move = this.addToPlane;
}
Shape.prototype.addToPlane = (x, y) => {
  this.position = new Point(x, y);
}
Shape.prototype.move = true;

function Circle(int) {
  Shape.call(this);
  this.radius = int;
  this.diameter = () => {
    return 2 * this.radius;
  }
  this.area = () => {
    return Math.PI * Math.pow(this.radius, 2);
  };
  this.circumference = () => {
    return (2 * Math.PI * this.radius);
  };
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Polygon(arrOfSides) {
  Shape.call(this);
  this.sides = arrOfSides;
  this.perimeter = () => {
    var sum = 0;
    this.sides.forEach((sideObj) => {sum += sideObj.length;})
    return sum;
  };
  this.numberOfSides = () => {
    return this.sides.length;
  };
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = () => {
  var sum = 0;
  this.sides.forEach((sideObj) => {sum += sideObj.length;})
  return sum;
};
function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
  this.area = () => { return this.width * this.height; };
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = () => { return this.width * this.height; };

function Square(length) {
  Rectangle.call(this, length, length, length, length);
  this.listProperties = () => {
    var str = Object.getOwnPropertyNames(Square).join(", ");
    return str;
  }
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
