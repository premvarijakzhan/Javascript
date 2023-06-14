//map each item in the array to something else

const numbers = [1,-1,2,3];

//const filtered = numbers.filter(value => value >= 0);

const items = numbers
.filter(value => value >= 0)
.map(n => obj = ({value: n})) //this is called chaining
.filter(obj => obj.value>1)
.map(obj => obj.value);

//const items = filtered.map(value => '<li>' + value + '</li>');

//const items = filtered.map(n => obj = ({value: n}));

//const html = '<ul>' + items.join('') + '</ul>';


console.log(items);

