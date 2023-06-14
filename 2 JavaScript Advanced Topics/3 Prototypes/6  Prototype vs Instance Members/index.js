
function Circle(radius) {
    //Instance members
    this.radius = radius;


    this.move = function(){
        this.draw();
        console.log('move');
    }
/*
    this.draw = function () {
    
        console.log('draw');
    }
*/ 
}

//Prototype members
Circle.prototype.draw = function () {
    //this.move();
    console.log('draw');
} 



const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function () {
    return 'Circle with radius' + this.radius;
}