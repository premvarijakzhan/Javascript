const numbers = [1,2,3,4];

const output = except(numbers, [1]);

console.log(output);

function except(array,exluded) {
    const output = [];

    for (let element of array) {
        
        if (!exluded.includes(element)) 
            output.push(element);
        return output;
            
    }
}