function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function() {
  return "(" + this.x +", " + this.y + ")"
}

function Side(length) {
  this.length = length
}

function Shape() {
  // Base object for all shapes
}
Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  Shape.call()
  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function() {
  return this.radius * 2
}
Circle.prototype.area = function() {
  return (this.radius * this.radius) * Math.PI
}
Circle.prototype.circumference = function() {
  return Math.PI * this.diameter()
}

function Polygon(sides) {
  Shape.call()
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function() {
  return this.sides.reduce((sum, side) => {
    return sum + side.length
  }, 0)
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(sideOneLen, sideTwoLen, sideThreeLen, sideFourLen) {
  Polygon.call(this, [new Side(sideOneLen), new Side(sideTwoLen), new Side(sideThreeLen), new Side(sideFourLen)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(sideOneLen, sideTwoLen, sideThreeLen) {
  Polygon.call(this, [new Side(sideOneLen), new Side(sideTwoLen), new Side(sideThreeLen)])
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
  this.length
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
  for (var prop in Square) {
    if (Square.hasOwnProperty(prop)) {
      return Square[prop]
    }
  }
}
