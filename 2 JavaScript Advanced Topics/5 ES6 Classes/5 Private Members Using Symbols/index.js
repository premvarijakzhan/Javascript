
const _radius = Symbol();
const _draw = Symbol();

class Circle{
    constructor(radius){
        // this.radius = radius;
        // this['radius'] = radius;
        //private property
        this[_radius] = radius;

    }

    //private method [] is called computed property names in es6
    [_draw](){

    }
}


const c = new Circle(1);
c.radius

//abstraction -> hiding the details and complexity and showing only the essentials parts
