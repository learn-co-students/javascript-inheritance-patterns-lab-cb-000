
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`
}

// ==========================================================

function Shape(){

}

const updatePoint = function(x,y){
  this.position = new Point(x, y)
}

Shape.prototype.addToPlane = updatePoint
Shape.prototype.move = updatePoint

// ==========================================================
function Side(length){
  this.length = length;
}
// ==========================================================

function Circle(int){
  this.radius = int;
  this.diameter = () => {
    return 2 * this.radius
  }
  this.area = () => {
    return Math.PI * this.radius**2
  }
  this.circumference = () => {
    return 2 * Math.PI * this.radius
  }
}

Circle.prototype = Object.create(Shape.prototype)


// ==========================================================

function Polygon(sidesArr){
  this.perimeter = () => {
    let sum = 0;
    for(let side of sidesArr){
      sum += side.length
    }
    return sum;
  }
  this.numberOfSides = () => {
    return sidesArr.length
  }
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.perimeter = () => {
  let sum = 0;
  for(let side of sidesArr){
    sum += side.length
  }
  return sum;
}
let p = new Polygon([new Side(3), new Side(4), new Side(2), new Side(3)])
// p.perimeter

// ==========================================================

function Quadrilateral(int1, int2, int3, int4){
  Polygon.call(this, [new Side(int1), new Side(int2), new Side(int3), new Side(int4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral;

// =================================================================

function Rectangle(width, height){
  this.width = width;
  this.height = height;
  Quadrilateral.call(this, width, height, width, height)
  this.area = () => {
    return this.width * this.height;
  }
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = () => {
  return this.width * this.height;
}

// ================================================

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  return 'length'
}

let s = new Square(4)

// =================================================

function Triangle(side1, side2, side3){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
