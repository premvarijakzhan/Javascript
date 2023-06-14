function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);
//objects in javascripts are dynamic
//add properties dynamically / accessing property
//by using
// 1 -> dot notation
circle.location = { x: 1 };
// 2 -> bracket notation and use a string to reference a property
circle['location'] = {x: 1};

//use bracket notation to dynamically access a property name
const propertyName = 'location';
circle[propertyName] = {x : 1};

//use bracket notation when you are using the 
//property names that are not valid identifiers

//const propertyName = 'center-location';
//circle[propertyName] = {x : 1 };

//Deleting a property from an existing object
delete circle.location;

