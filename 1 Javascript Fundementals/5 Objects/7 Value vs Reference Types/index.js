//Primitive values are independent of each other

let x = 10;
let y = X;

x = 20;


//Reference values == objects
/*When we use an object, that object is not stored in this 
variable. That object is stored somewhere else in the memory,
and the address of the memory location is stored inside that 
memory variable.
It is the address or the reference is copied according to the below 
work.
Both x1 and y1 are pointing to the same, object in memory.
And when we modify each object using x1, or y1,
our changes are immediately visible to the other variables.
*/
let x1 = {value: 10};
let y1 = x1;

x1.value = 20;


//Logs 10 cause its primitive and number in the function is local
let number =10;
function increase(number) {
    number++;
}

increase(number);
console.log(number);

let obj ={value: 10 };
function increaseObj(obj) {
    obj.value++;
}

increaseObj(obj);
console.log(obj);