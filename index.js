
/*******************Point*********************/
/*Used by, but not inherited by*/
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.constructor = Point;
Point.prototype.toString = function toString() {
    //returns location in (x,y) format
    var myRetVal = "";
    myRetVal = "(" + this.x + ", " + this.y + ")";
    console.log("this.x = " + this.x + "  this.y = " + this.y);
    return myRetVal;
}
/*******************SIDE************************/
/*Used by, but not inherited by */
function Side(len) {
    this.length = len;
}

/******************SHAPE*********************/
/*Base class */
function Shape (x, y) {
    this.position = new Point(x, y); 
}
Shape.prototype.addToPlane = function addToPlane(x, y) {
    //addToPlane function  
    //takes two integers, x and y, 
    //This function should assign a 
    //Point to the Shape's position property 
    //based on these arguments.

    this.position = new Point(x,y);
    
}
Shape.prototype.move = function move(x,y){
    //Shape should also define a move function 
    //that takes an x,y pair of arguments and 
    //moves the position to a new Point.  
    this.position = new Point(x, y); 
}

/***********************CIRCLE*****************/
/* Circle -> Shape */
function Circle(radius) {
    this.radius = radius;
    Shape.call(this, 0,0);
}
Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function area() {
    // calculate area
    //A = pi * r(sq)
    return (Math.PI * this.radius * this.radius);
}
Circle.prototype.circumference = function circumference() {
    //based on radius, calculate circumference
    return (Math.PI * 2 * this.radius)
}
Circle.prototype.diameter = function diameter() {
    return (this.radius * 2);
}

/*******************POLYGON*********************/
/*Polygon->Shape */
function Polygon(sideArr) {
    this.sides = sideArr; 

    //inherits from Shape
    Shape.call(this, 0,0);
}
Polygon.prototype=Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function perimeter() {
    //calculates the perimeter of a Polygon
    //based on the lengths of the sides
    var perim = 0;
    for (let i=0; i< this.numberOfSides(); i++){
        perim =  perim + this.sides[i].length;
    }
    return perim;
} 
Polygon.prototype.numberOfSides = function numberOfSides() {
    //returns the number of sides
    return this.sides.length;
}



/*******************TRIANGLE********************/
/* Triangle->Polygon->Shape */
function Triangle(len1, len2, len3){
    //inherits from Polygon, which inherits from Shape
    Polygon.call(this, [new Side(len1), new Side(len2), new Side(len3)]);
}
Triangle.prototype=Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

/*******************QUADRILATERAL***************/
/*Quadrilateral->Polygon->Shape */
function Quadrilateral(len1, len2, len3, len4) {
    //inherits from Polygon, which inherits from Shape
    Polygon.call(this, [new Side(len1), new Side(len2), new Side(len3), new Side(len4)]);
}
Quadrilateral.prototype=Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


/*******************RECTANGLE*******************/
/*Rectangle->Quadrilateral->Polygon->Shape */
function Rectangle(width, height){
    this.width = width;
    this.height = height;
    Quadrilateral.call(this, this.width, this.height, this.width, this.height);
}
Rectangle.prototype=Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function area() {
    return (this.width * this.height);
}

/*******************SQUARE***********************/
/*Square->Rectangle->Quadrilateral->Polygon->Shape*/
function Square(sideLength){
    this.length = sideLength;
    
    Rectangle.call(this, this.length,this.length);
    //Square should have access to area(),
    //perimeter(), numberOfSides(), addToPlane(),
    //position, move(), width, height, and so on.
}
Square.prototype=Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties =  function listProperties() {
    //returns a string containing only the
    //properties that belong to Square
    //Do NOT list the constructor, area,
    //perimeter, and other things inherited
    //from the prototype chain.
    var myRetVal = "";
    for (var prop in this){
        if(this.hasOwnProperty(prop)) { 
            myRetVal = myRetVal + prop + " "; 
        }
    }
    return myRetVal;
}