//Abrstraction means hide the details and complexity
//and show or expose only the essentials 


function Circle(radius){
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function(){
        //...
    }

    this.draw = function () {

        this.computeOptimumLocation();
        console.log('draw');
    };
}

const circle = new Circle(10);
