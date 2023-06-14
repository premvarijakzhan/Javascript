//to enable stict mode 
// 'use strict';


// const Circle = function(){
//     this.draw = function(){console.log(this);}
// };

// const c = new Circle();

// //Method call -> because we are calling a method on an object
// c.draw();

// const draw = c.draw;

// //console.log(draw);

// //Function call -> because we are calling this on a stand alone function that is not part of an object
// //when we call this function by default this will point to the global object which is window in the browser and 
// //global in node  
// draw();


/*
STRICT MODE -> when we enable this mode, 
javascript engine will be the most sensitive, so it will do more 
error checking if there are errrors that silently fail, it's going to turn them into 
exceptions, and also it will change the behaviour of the this keyword in functions
*/


class Circle{
    draw(){
        console.log(this);
    }
}


const c = new Circle();
const draw = c.draw;
draw();