function Point(x, y) {
	this.x = x
	this.y = y

	this.toString = function() {
		return this.x + ", " + this.y
	}
}

function Side(length){
  this.length = length
};

function Shape(x, y){
	this.position
};

Shape.prototype.addToPlane = function(x, y) {
      this.position = new Point(x, y)
};

Shape.prototype.move = function(x, y){
  this.addToPlane(x ,y)
};

function Circle(radius){
	Shape.call(this)
    this.radius = radius
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.contructor = Circle;

Circle.prototype.area = function(){
   return Math.PI * this.radius^2
};

Circle.prototype.diameter = function(){
	return 2 * this.radius
}

Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius 
};

function Polygon(sides){
    Shape.call(this)
    this.sides = sides
};

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.contructor = Polygon;

Polygon.prototype.perimeter = function() {
  var result = 0;
  for(var i = 0;i < this.sides.length; i++){
     result += this.sides[i].length 
  }
  return result;
};

Polygon.prototype.numberOfSides = function(){
  return this.sides.length;
};


function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength){
	Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)])
};

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.contructor = Quadrilateral;

function Rectangle(width, height){
    this.width = width
    this.height = height
    Quadrilateral.call(this, width, height, width, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.contructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.width * this.height
};

function Square(length){
    Rectangle.call(this, length, length);
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.contructor = Square;

Square.prototype.listProperties = function(){
	var ownPeroperties = "Square has "
	
	for(var property in this){
		if(this.hasOwnProperty(property)){
	    ownPeroperties += "this." + property + " = " +  this[property] + "\n"
		}
	}
	debugger;
	return(ownPeroperties)
}

function Triangle(sideOneLength, sideTwoLength, sideThreeLength){
	Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
};

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.contructor = Triangle;



