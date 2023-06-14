let address = createAddress('a','b','c');
let address1 = new Address('a','b','c');

console.log(address);
console.log(address1);
   
//Factory functions
function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}


//Constructor function
function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}