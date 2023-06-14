/*if an object has a function/method then it is known as behaviour*/

/*
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function () {
        console.log('draw');
    }
};
*/

//Factory function
function createCircle(radius) {
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

circle.draw();

