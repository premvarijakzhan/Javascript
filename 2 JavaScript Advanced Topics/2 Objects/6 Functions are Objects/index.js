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

const circle = new Circle(1);


*/

/*
{} == this in the object
Circle.call({},1) is same as  const another = new Circle(1);
Circle.apply({},[1,2,3]) is exactly like call method, instead passing all the arguments
explicitly, we pass then in an array, this is useful if you already have an array in 
somewhere in your application and then you want to pass the array
as the second argument to the apply method 
*/