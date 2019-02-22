console.log(0.1 + 0.2); //expectedValue  = 0.30000000000000004

//to fix this problem use this ;

cosole.log(+(0.1 + 0.2).toFixed(12)); // expectedValue = 0.3

//it will convert it to string firstly and then shaved off some decimal places, finally convert it to number again.

//reference: https://stackoverflow.com/questions/10473994/javascript-adding-decimal-numbers-issue
