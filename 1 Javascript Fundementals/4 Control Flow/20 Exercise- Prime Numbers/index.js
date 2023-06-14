showPrimes(20);

//Prime (whose factors are only 1 and itself)
//Composite


function showPrimes(limit){
 
    for (let number = 2; number <= limit; number++) 
        //2 - current(i)
    
        if(isPrime(number)) console.log(number);
        
    

}



function isPrime(number) {
//    let isPrime = true;
        for (let factor = 2; factor < number; factor++) 
            
            if(number % factor === 0)
            //isPrime = false;
            //break;
            return false; 
        

        return true;
}