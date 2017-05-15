// ------------------------------------------------------------
// --------------------------POINT OBJECT
// ------------------------------------------------------------
function Point (x,y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function (){
  return `(${this.x},${this.y})`;
}

// ------------------------------------------------------------
// --------------------------SHAPE OBJECT
// ------------------------------------------------------------
function Shape (){
  this;
}

Shape.prototype.addToPlane = function (x,y){
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y){
  this.position.x = x;
  this.position.y = y;
  //this.position = new Point(x,y);
}

// ------------------------------------------------------------
// --------------------------CIRCLE OBJECT
// ------------------------------------------------------------
function Circle (radius){
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(){
 return this.radius*2;
}

Circle.prototype.area = function(){
 return Math.PI*this.radius^2;
}

Circle.prototype.circumference = function(){
  return 2*Math.PI*(this.radius);
}

// ------------------------------------------------------------
// --------------------------SIDE OBJECT
// ------------------------------------------------------------
function Side(length){
  this.length = length;
}

// ------------------------------------------------------------
// --------------------------POLYGON OBJECT
// ------------------------------------------------------------
function Polygon (sides){
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function(){
 return this.sides.reduce((total,elem)=>{return total+elem.length},0)
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length;
}


// ------------------------------------------------------------
// --------------------------Quadrilateral OBJECT
// ------------------------------------------------------------

function Quadrilateral (s1,s2,s3,s4){
  Polygon.call(this,[new Side(s1),new Side(s2),new Side(s3), new Side(s4)]);

}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


// ------------------------------------------------------------
// --------------------------Triangle OBJECT
// ------------------------------------------------------------

function Triangle (s1,s2,s3){
  Polygon.call(this,[new Side(s1),new Side(s2),new Side(s3)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;


// ------------------------------------------------------------
// --------------------------Rectnagle OBJECT
// ------------------------------------------------------------

function Rectangle (width,height){
  Quadrilateral.call(this,width,height,width,height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
  return this.width*this.height;
}


// ------------------------------------------------------------
// --------------------------Square OBJECT
// ------------------------------------------------------------

function Square (length){
  Rectangle.call(this,length,length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function(){
  var result = "";
  var list = Object.getOwnPropertyNames(this)
  for (let item of list){
    if (this.hasOwnProperty(item)){
    result  += `${item},`;
  }
  }
  return result;
}
