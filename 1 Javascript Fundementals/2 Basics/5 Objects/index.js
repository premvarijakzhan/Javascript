/*
let name = 'Prem';
let age = 25;
*/

let person = {
    /*
    here we put in the key value 
    pairs which is also known as 
    properties of this object
    */
    name: 'Prem',
    age: 25


}; //Object literal


//Dot Notation
person.name = 'John'; //Default choice

//Bracket Notation
person['name'] = 'Mary';
      
console.log(person);

console.log(person.name);


console.log(person['name']);