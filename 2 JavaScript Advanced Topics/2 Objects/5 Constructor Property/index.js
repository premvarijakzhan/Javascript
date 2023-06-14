/*Every object in Javascript has a property 
called a constructor, and that references 
the function that was used to construct or 
create that object*/

//Factory function
function createCircle(radius) {
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

}


const another = new Circle(1);

//other constructors
/*
new String(); // '', "". ``
new Boolean(); //true,false
new Number(); // 1,2,3,...
*/

