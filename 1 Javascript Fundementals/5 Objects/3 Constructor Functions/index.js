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


//Constructor Function
//construct means create an object
//uses  Pascal naming convention
function Circle(radius) {
    this.radius = radius; // this means it is a reference to the object that is executing this piece of code / an empty object
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);