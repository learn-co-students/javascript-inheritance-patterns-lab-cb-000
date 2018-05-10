function Point(x,y)
{
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function()
{
  return this.x + "," + this.y;
}
/////////////////////////////////////////////////////

function Side(length)
{
    this.length = length;
}
////////////////////////////////////////////////////////

function Shape()
{
}

Shape.prototype.addToPlane = function(x,y)
{
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y)
{
  this.position = new Point(x,y);
}

/////////////////////////////////////////////////////////////////////
function Circle(radius)
{
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Circle.prototype.diameter = function()
{
    return this.radius * 2;
}

Circle.prototype.area = function()
{
  return Math.PI * Math.pow(this.radius,2);
}

Circle.prototype.circumference = function()
{
  return 2 * Math.PI * this.radius;
}

///////////////////////////////////////////////////
function Polygon(sidesArray)
{
  this.sides = sidesArray;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function()
{
  var total = 0;
  this.sides.forEach(function(side){
    return total += side.length;
  });
  return total;
}

Polygon.prototype.numberOfSides = function()
{
  return this.sides.length;
}

////////////////////////////////////////////////////////////////
function Quadrilateral(x,y,z,k)
{
  Polygon.call(this,[new Side(x),new Side(y),new Side(z),new Side(k)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

//////////////////////////////////////////////////////////////////////////

function Rectangle(width,height)
{
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function()
{
  return this.height * this.width;
}

Rectangle.prototype.perimeter = function()
{
  return 2 * (this.height + this.width);
}
Rectangle.prototype.numberOfSides = function()
{
  return 4;
}
////////////////////////////////////////////////////////////////////////
function Triangle(x,y,z)
{
  Polygon.call(this,[new Side(x),new Side(y),new Side(z)]);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

//////////////////////////////////////////////////////////////////////////////
function Square(x)
{
  Rectangle.call(this,x,x);
  this.length = x;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function()
{
  return Math.pow(this.length,2);
}
Square.prototype.perimeter = function()
{
  return Math.pow(this.length,2);
}
Square.prototype.listProperties = function()
{
  for(var prop in this)
  {
    if(this.hasOwnProperty(prop))
    {
      console.log(this[prop]);
    }
  }
}
