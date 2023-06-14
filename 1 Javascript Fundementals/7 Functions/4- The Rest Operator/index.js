function sum(...args) {
    //console.log(args);
    return args.reduce((a,b) => a+b);

}

function discountSum(discount,...prices) {
    
    const total =  prices.reduce((a,b) => a+b);
    
    return total * (1 - discount);
}


console.log(sum(1, 2, 3, 4, 5));

console.log(discountSum(0.1,20,30));
