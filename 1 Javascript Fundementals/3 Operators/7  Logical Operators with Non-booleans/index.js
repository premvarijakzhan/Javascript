//Falsy (false)
//undefined 
//null
//0
//false
//''
//NaN


//Anything that is not Falsy -> Truthy


//Short-circuiting
//false|| 1 || 2 
//-> 1 

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);