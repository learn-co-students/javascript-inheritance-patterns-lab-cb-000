function Point(x,y) {
  this.x = x;
  this.y = y;
  this.toString = () => {
    return `${this.x}, ${this.y}`
  }
}

function Side(length) {
  this.length = length
}

function Shape() {}
Shape.prototype = Object.create(Shape.prototype)
Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y) {
  this.position.x = x
  this.position.y = y
}

function Circle(r) {
  this.radius = r
  this.diameter = () => { return this.radius * 2 }
  this.area = () => { return Math.PI * this.radius ** 2 }
  this.circumference = () => { return Math.PI * this.radius * 2 }
}
Circle.prototype = Object.create(Shape.prototype)

function Polygon(array) {
  this.sides = array
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.perimeter = function() {
  return this.sides.reduce( (sum, e) => {
    return sum + e.length
  }, 0)
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(s1,s2,s3,s4) {
  this.sides = [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]
}
Quadrilateral.prototype = Object.create(Polygon.prototype)

function Rectangle(w,h) {
  this.width = w;
  this.height = h;
  this.sides = [new Side(w), new Side(h), new Side(w), new Side(h)]
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(s) {
  this.width = s;
  this.height = s;
  this.sides = [new Side(s), new Side(s), new Side(s), new Side(s)]
  this.listProperties = function() {
    return "width, height, sides"
  }
}
Square.prototype = Object.create(Rectangle.prototype)

function Triangle(s1, s2, s3) {
  this.sides = [new Side(s1), new Side(s2), new Side(s3)]
}
Triangle.prototype = Object.create(Polygon.prototype)
