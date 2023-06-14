const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

//Old Method
// const another = {

// };


// for(let key in circle)
//     another[key] = circle[key];

//New method
// const another = Object.assign({},circle);

const another = {...circle};

console.log(another);