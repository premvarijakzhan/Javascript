function Shape()
{
    Shape.prototype.duplicate = function(){
        console.log('duplicate');
    }

}

function Circle(radius){
    this.radius = radius;
}


//Circle.prototype = Object.create(Object.prototype); //object base

//if we reset the prototype, then we cant make a new circle object dynamically, because 
//we asssigned the prototype/parent to shape so it calls shape
//so when we use this way always reset the constructor as well
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}


const s = new Shape();
const c = new Circle(1);