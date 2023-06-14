//Logical AND (&&)
//Returns TRUE if both operands are TRUE 
// console.log(true && true);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible', eligibleForLoan);


//Logical OR (||)
//Returns TRUE if one of the operator is TRUE
let highIncome2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore;

console.log(eligibleForLoan2);

//NOT (!)
let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);
