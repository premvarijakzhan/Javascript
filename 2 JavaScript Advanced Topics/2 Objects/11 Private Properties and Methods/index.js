//Abrstraction means hide the details and complexity
//and show or expose only the essentials 



function Circle(radius){
    
    //concept of closure
    /*
    closure determines what variables will be 
    accessible to an inner function
    the inner function can able to access all the 
    variables that defined in the parent function as well
    */    
   /* scope [local variables] is temporary and it dies after executing the function 
    closure is permanenent and stays there in the memory
    they will preserve their state, because they are part of the closure of the function

    */
    
    this.radius = radius;
    
    //becomes a local variable

    let defaultLocation = { x: 0, y: 0 };

    //becomes private method

    let computeOptimumLocation = function(){
        //...
    }

    this.draw = function () {

        computeOptimumLocation();
        //defaultLocation

        //if you want to access the members of this
        //new circle object, need to use this
        //this.radius;
        console.log('draw');
    };
}

const circle = new Circle(10);
