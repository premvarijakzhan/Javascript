/*
Every object used in Javascript has a property called constructor.
And that references the function that was used to construct or create that
object
*/



//Uses Camel Notation
//Factory function = it produces object

function createCircle(radius) {
    
    return {
        radius,
        draw(){
            console.log('draw');
        }
        // draw: function(){
        //     console.log('draw');
        // }
    };
    
}

const circle = createCircle(1);

//Constructor Function
//construct means create an object
//uses  Pascal naming convention
function Circle(radius) {
    this.radius = radius; // this means it is a reference to the object that is executing this piece of code / an empty object
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);