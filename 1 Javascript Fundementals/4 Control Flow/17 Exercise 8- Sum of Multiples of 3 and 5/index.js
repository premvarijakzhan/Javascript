console.log(sum(10));
//Multiples of 3: 3,6,9
//Multiples of 5: 5,10


function sum(limit) {

   let total = 0;

    for (let i = 0 ;i <= limit; i++)
        if (i % 5 === 0  || i % 3 === 0)             
            total +=i;
           
    return total;
    
    
}

    
