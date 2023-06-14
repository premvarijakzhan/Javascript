/*In ES6 there's a new way to create objects and 
implement inheritance, that's using classes, but these 
classes are not like classes we have in language like C#
and Java, they are just a syntactic sugar over prototypical
inheritance 
*/




// function Circle(radius) {
//     this.radius  = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }



/*
now let's see how to rewrite the inheritance above 
using ES6 classes
*/

/*
-the first { } is known as the body of the class
in the body we can define the properties and methods
-one special method that we have is called constructor
which is used to initialise objects just like the construction function Circle(radius)
-to not make a method be in protoype define it in the constructor
-this is a type of function
*/
class Circle {
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log('move');
        }
    }
    
    //defininig a method
    draw(){
        console.log('draw');
    }
}


const c = new Circle(1);