const person = {
    firstName: 'Prem',
    lastName: 'Varijakzhan',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
       
        if (typeof value !== 'string') return;
            throw new Error('Value is not a string.'); //this is called throwing an exception
        

        const parts = value.split(' ');
        if (parts.length !== 2) 
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }

};


try{
    
    person.fullName = 'John Smith';

}
catch(e){
  //  console.log(error); //the rror object that was thrown
    alert(e);
}




console.log(person);
