function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length
}

function Shape() {

}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2)
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

function Polygon(array) {
  Shape.call(this)
  this.sides = array
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  var sum = function(total, currentValue){
    return total + currentValue
  }
  return this.sides.map(side => side.length).reduce(sum)
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(l1,l2,l3,l4) {
  var quadSides = makeSides(Array.from(arguments))
  Polygon.call(this, quadSides)
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(l1,l2,l3) {
  var triSides = makeSides(Array.from(arguments))
  Polygon.call(this, triSides)
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  return `${Object.getOwnPropertyNames(this).join(", ")}`
}

function makeSides(array) {
  return array.map(length => new Side(length))
}
