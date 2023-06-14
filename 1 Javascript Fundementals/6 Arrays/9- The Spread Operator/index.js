const first = [1,2,3]; 
const second = [4,5,6];


//const combined = first.concat(second);
const combined = [...first, ...second];


//const slice = combined.slice(2,4);
const copy = [...combined];


console.log(combined);
console.log(copy);
