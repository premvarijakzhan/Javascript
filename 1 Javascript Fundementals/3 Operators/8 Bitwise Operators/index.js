
// 1        = 00000001
// 2        = 00000010
// Result   = 00000011
// Result   = 3
// 1 bit has 8 numbers
// 1 BIT is 1 BYTE 

// console.log(1 | 2); //Bitwise OR
// console.log(1 & 2); //Bitwise AND


//Access Control System
//Read, Write, Execute
//00000100
//00000010
//00000001


const readPermission = 4;
const writePermission= 2;
const executePermission= 1; 

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);
console.log(myPermission);