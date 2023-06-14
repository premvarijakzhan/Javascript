
//weakmaps is a new type in es6 to implement private properties and methods in an object

const _radius = new WeakMap();
//weakmap is a dictionary where keys are objects and values can be anything
//there are called weakmaps cause there are weak and if theres no reference in the key it will be collected by garbage collector
const _move = new WeakMap();


class Circle{
    constructor(radius){
        //this.radius = radius;
        _radius.set(this, radius);

        //the this in console.log('move',this) will bring  the global 
        // _move.set(this, function(){
        //     console.log('move',this);
        // });

        //the this in console.log('move',this) will bring  the instance due to the arrow function 
        _move.set(this, () => {
            console.log('move',this);
        });
    }
    draw(){
        //to read
       //console.log( _radius.get(this));
       _move.get(this)(); //() means calling the function
        
       console.log('draw');
    }
}


const c = new Circle(1);