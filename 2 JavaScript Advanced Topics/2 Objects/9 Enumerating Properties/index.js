function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}


const circle = new Circle(10);

//For in loop [Simplest way]
for(let key in circle)
console.log(key,circle[key]);

//print only the properties and not methods
for(let key in circle){
    if (typeof circle[key] !== 'function') 
    console.log(key,circle[key]);
}

//another approach to get all the keys in an object
const keys = Object.keys(circle);
console.log(keys);


//For of loop
// only for arrays or maps , not iterable for objects
for(let key of circle)
console.log(key); 


//Object.keys(circle) will return array so the loop works
for(let key of Object.keys(circle))
console.log(key); 

for(let entries of Object.entries(circle))
console.log(entries); 


//in operator (to check an existence of propety or method in an object )
if('radius' in circle) console.log('yes');

if ('radius' in circle)
    console.log('Circle has a radius.');