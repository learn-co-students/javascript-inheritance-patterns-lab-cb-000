function Point(x, y){
  this.x = x ;
  this.y = y ;
  this.toString = function(){
    return `(${this.x}, ${this.y})` ;
  }
}

function Side(length) {
  this.length = length ;
}

function Shape(){
  this.position = null
}

Shape.prototype.addToPlane =  function(x, y){
    this.position = new Point(x,y)
}
Shape.prototype.move = function(x, y){
  this.position = new Point(x,y)
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
  this.diameter = function() {
    return this.radius * 2
  }
  this.area = function(){
    return Math.PI * this.radius ** 2
  }
  this.circumference = function() {
    return 2 * Math.PI * this.radius
  }
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle ;

function Polygon(sides){
  Shape.call(this)
  this.sides = sides ;

  this.numberOfSides = function(){
    return this.sides.length;
  }
}


Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon ;

Polygon.prototype.perimeter = function(){
    var p = 0
    for(let i = 0; i < this.sides.length; i++){
      p += this.sides[i].length;
    }
    return p ;
  }

function Quadrilateral(s1, s2, s3, s4){
  var sides = [];
  Array.prototype.forEach.call(arguments, function(e){
    sides.push(new Side(e));
  })
  Polygon.call(this, sides)
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height){
  this.width = width ;
  this.height = height ;
  Quadrilateral.call(this, width, height, width, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
    return this.width * this.height ;
  }

function Square(length) {
  this.length = length
  Rectangle.call(this, length, length);
}


Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function(){
  var ownProps = []
  var props = Object.keys(this)

  for(let i = 0; i < props ; i++){
    if(this.hasOwnProperty(props[i])){
      ownProps.push(props[i])
    }
  }
  return ownProps.join(', ') ;
}


function Triangle(s1, s2, s3){
  var sides = [];
  Array.prototype.forEach.call(arguments, function(e){
    sides.push(new Side(e));
  })
  Polygon.call(this, sides)
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle ;
