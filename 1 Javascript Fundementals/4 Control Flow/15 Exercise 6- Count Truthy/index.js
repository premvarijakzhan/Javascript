const array = [0, null, undefined, '',2,3];

console.log(countTruthy(array));

//Falsy
//undefined
//null
//''
//false
//0
//NaN





function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if(value)
    count++;
    return count;
}
