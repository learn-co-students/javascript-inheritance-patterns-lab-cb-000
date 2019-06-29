function Point(x, y){
  this.x = x;
  this.y = y;
  this.toString = function(){
    return `(${x}, ${y})`
  }
}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  Shape.prototype.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  Shape.prototype.position = new Point(x, y)
}

function Circle(radius){
  this.radius = radius
  this.area = function(){
    return Math.PI * radius**2
  }

  this.circumference = function(){
    return Math.PI * 2 * radius
  }

  this.diameter = function(){
    return 2 * radius
  }
}

Circle.prototype = Object.create(Shape.prototype)

function Side(length){
  this.length = length
}

function Polygon(sides){
  this.sides = sides
  this.perimeter = function(){
    var total = 0
    for(var i = 0; i < sides.length; i++){
      total += sides[i].length
    }
    return total
  }
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.perimeter = function(){
  var total = 0
  for(var i = 0; i < this.sides.length; i++){
    total += this.sides[i].length
  }
  return total
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

function Quadrilateral(s1, s2, s3, s4){
  this.sides = [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Triangle(s1, s2, s3){
  this.sides = [new Side(s1), new Side(s2), new Side(s3)]
}

Triangle.prototype = Object.create(Polygon.prototype)


function Rectangle(width, height){
  this.width = width
  this.height = height
  this.sides = [new Side(width), new Side(height), new Side(width), new Side(height)]
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function(){
  return this.width * this.height
}

function Square(length){
  this.width = length
  this.height = length
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)]
  this.listProperties = function(){
    for (var prop in this){
      if (this.hasOwnProperty(prop)){
        console.log(this.prop)
      }
    }
  }
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.area = function(){
  return this.width * this.height
}
