//Function declaration 
function walk(){
    console.log(walk);
}


//Anonymous Function Expression

let run = function () {
    console.log('run');
};

run();

//Named Function Expression
let run1 = function walk() {
    console.log('run');
};

run1();

let move = run;
move();