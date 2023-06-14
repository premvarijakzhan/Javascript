const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};


//For in loop [Simplest way]
for(let key in circle)
console.log(key,circle[key]);


//For of loop
// only for arrays or maps , not iterable for objects
for(let key of circle)
console.log(key); 


//Object.keys(circle) will return array so the loop works
for(let key of Object.keys(circle))
console.log(key); 

for(let entries of Object.entries(circle))
console.log(entries); 


//in operator
if('radius' in circle) console.log('yes');
