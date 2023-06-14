//for-in

//to display all the properties of this person object
const person = {
    name: 'Prem',
    age:25 
};

for (let key in person)
console.log(key, person[key]);


const colors = ['red','green','blue'];

for (let index in colors) 
console.log(index,colors[index]);