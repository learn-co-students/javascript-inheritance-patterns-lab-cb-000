function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = () => {
    return `${this.x},${this.y}`
  }
}

function Shape() {
  this.position;
  this.addToPlane = (x, y) => {
    this.position = new Point(x, y);
  }
  this.move = this.addToPlane;
}

function Circle(int) {
  Shape.call(this);
  this.radius = int;
  this.area = () => {
    return Math.pow((Math.PI * this.radius), 2);
  };
  this.circumference = () => {
    return 2 * Math.PI * this.radius;
  };
}

function Side(length) {
  this.length = length;
}

function Polygon(arrOfsides) {
  Shape.call(this);
  this.sides = arrOfsides;
  this.perimeter = () => {
    var sum = this.sides.reduce((total, sideLength) => total + sideLength);
    return sum;
  };
  this.numberOfSides = () => {
    return this.sides.length;
  };
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [side1, side2, side3, side4]);
}

function Triangle(side1, side2, side3) {
  Polygon.call(this, [side1, side2, side3]);
}

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.area = () => { return width * height; };
}

function Square(length) {
  Rectangle.call(this, length, length, length, length);
}
