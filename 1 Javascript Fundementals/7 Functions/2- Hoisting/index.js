/*When javascript executes the code it moves all the function 
declaration to the top, this is called hoisting
*/


//Function Declaration
walk();


function walk() {
    console.log('walk');
}

//Function Expression

const run = function () {
    console.log('run');
};
