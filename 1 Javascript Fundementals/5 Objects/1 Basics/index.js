
//Object-oriented Programming (OOP)

//const circle = {} known as object literal syntax

const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw(); //Method

//a function is part of an object it is known as method