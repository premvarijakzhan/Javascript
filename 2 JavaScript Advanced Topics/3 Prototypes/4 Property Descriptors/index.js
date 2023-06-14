let person = { name: Prem };
//console.log(person);

// for (let key in person)
//     console.log(key);
// console.log(Object.keys(person));

// let objectBase = Object.getPrototypeOf(person);
// let descriptor =  Object.getOwnPropertyDescriptor(objectBase,'toString');
// console.log(descriptor);

Object.defineProperty(person,'name',{
    writable:false,
    // enumerable:false
    enumerable:true,
    configurable:false
});

person.name = 'John';

console.log(person);
console.log(Object.keys(person));

delete person.name

console.log(person);
