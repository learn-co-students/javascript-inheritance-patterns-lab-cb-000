function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return(`(${this.x}, ${this.y})`)
}


function Shape() {}

Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
  this.position = new Point(x,y)
}

function Side(sides){
  this.length = sides
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function(){
  return this.radius*2
}
Circle.prototype.area = function(){
  return Math.PI * this.radius ** 2
}
Circle.prototype.circumference = function(){
  return Math.PI*this.radius*2
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

Polygon.prototype.perimeter = function(){

  var p = 0
  for(var i = 0; i < this.numberOfSides(); i++){
    p += this.sides[i].length
  }
  return p
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  // call Shape constructor
  Polygon.call(this,[new Side(sideOneLength), new Side(sideTwoLength),new Side(sideThreeLength),new Side(sideFourLength)]);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
  //this.length = 4
}

//inherit from Shape prototype
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height){
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function(){
  return this.width * this.height
}

function Square(length){
  Rectangle.call(this, length, length)
  this.length = length
}

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function(){
  for (var prop in this){
    var string = ''
    if(this.hasOwnProperty(prop)){
      string=string + prop + ' '
    }
  }
}
