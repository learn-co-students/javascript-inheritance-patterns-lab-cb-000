
//Shape base Object, function Shape(sides, x, y) {
function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Point(x,y) {


  this.x = x;
  this.y = y;
}

// toString is a Point prototype
Point.prototype.toString = function() {
  return ( "(" + this.x + ", " + this.y + ")" );
}

function Side( length ) {
  this.length = length;
}

function Circle( radius ) {
  console.log(radius);
  Shape.call(this);
  this.area = () => {
    return Math.PI * this.radius * this.radius;
  }
  this.diameter = () => {
    console.log(this.radius);
    return( 2 * this.radius );
  }
  this.circumference = () => {
    return( 2 * Math.PI * this.radius );
  }
  this.radius = radius;
}

// Circle inherits from Shape
Circle.prototype = Object.create( Shape.prototype );
Circle.prototype.constructor = Circle;
//Circle.prototype.area = function() {
//  return( Math.PI * (this.radius) * (this.radius) );
//}
//Circle.prototype.circumference = function() {
//  return 2 * Math.PI * this.radius;
//}
//Circle.prototype.diameter = function() {
//  console.log( this.radius )
//  return( 2 * (this.radius) );
//}

// Polygon inherits from Shape, has Side objects
function Polygon( sides ) {
  Shape.call( this );
  this.sides = sides;
  this.numberOfSides = function() {
      return sides.length;
  }
}

Polygon.prototype = Object.create( Shape.prototype );
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0; i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

// Moved this function into Polygon()
//Polygon.prototype.numberOfSides = function() {
//    return this.sides.length;
//}

// Quadrilateral inherits from Polygon
function Quadrilateral( side_one, side_two, side_three, side_four ) {
  Polygon.call(
      this,
      [ new Side(side_one),
        new Side(side_two),
        new Side(side_three),
        new Side(side_four)]
  );

}
Quadrilateral.prototype = Object.create( Polygon.prototype );
Quadrilateral.prototype.constructor = Quadrilateral;

// Rectangle inherits from Quadrilateral
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

// Square inherits from Rectangle
function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
  for (var prop in this) {
     if(this.hasOwnProperty(prop)) {
       console.log(this + prop + ": " + this[prop]);
     }
     //else {
     //console.log(prop);
     //}
   }
}

// Triangle inherits from Polygon
function Triangle (side_one, side_two, side_three) {
  Polygon.call(
    this,
    [ new Side(side_one),
      new Side(side_two),
      new Side(side_three)]
  );
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle;
