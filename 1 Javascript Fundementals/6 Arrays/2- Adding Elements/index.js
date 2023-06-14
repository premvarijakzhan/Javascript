const number = [3,4]; 
/*cant reassign the numbers cause its constant variables
however its perfectly fine to modify the content of this array
we can add new elements or remove existing elements
*/


//arrays are also objects

//Add new elements at
//End 
number.push(5,6);


//Beginning
number.unshift(1,2);



//Middle
number.splice(2,0,'a','b');

console.log(number);