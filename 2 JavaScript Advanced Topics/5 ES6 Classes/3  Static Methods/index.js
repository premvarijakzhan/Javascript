/*In classical object-oriented languages. there are 2 types of method
-Instance method 
-Static method (this method is available on the class itself, 
                we often use them to create utility 
                functions that are not specific to a given object)

*/


class Circle{
    constructor(radius){
        this.radius  = radius;
    }

    //Instance Method 
    //because it is available on an instance of a class which is object
    //tied to the circle object
    draw(){

    }

    //Static method
    //not tied to the circle object
    //will no longer available in cirlce object due to static keyword
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}


//const circle = new Circle(1);
const circle = Circle.parse('{ "radius": 1 }');

Circle.parse() //is accessible on class reference
console.log(circle);

/*
so with this static method we are not working with a particular 
circle object, we are working with a circle class itself.
so to call static methods we don't have to create an instance of class
*/

