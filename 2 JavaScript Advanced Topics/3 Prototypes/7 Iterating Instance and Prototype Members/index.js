
function Circle(radius) {
    //Instance members
    this.radius = radius;


    this.move = function () {

        console.log('move');
    }

}

const c1 = new Circle(1);

//Prototype members
Circle.prototype.draw = function () {

    console.log('draw');
}

//Returns only instance members
console.log(Object.keys(c1));

//Retruns all memebers (instance + prototype)
for (let key in c1) console.log(key);

//instance is also known as own property