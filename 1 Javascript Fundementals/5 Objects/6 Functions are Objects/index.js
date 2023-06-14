function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

/*
every object in Javascript has a constructor property,
and that references the function that was used to 
create that object

under the hood

const Circle1 = new Function('radius', `
  this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
`)

const Circle = new Circle(1);


*/

/*
{} == this in the object
Circle.call({},1) == const another = new Circle(1);


*/