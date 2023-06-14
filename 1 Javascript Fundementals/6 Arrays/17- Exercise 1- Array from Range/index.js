const numbers = arrayFromRange(1,4);

console.log(numbers);


function arrayFromRange(min,max) {
    const ouput  = [];
    for (let i = min; i <= max; i++) 
        ouput.push(i);
    return output;
    
}
