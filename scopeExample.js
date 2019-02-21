//What will the following code output?

(function() {
	a = b = 5;
})();

console.log(b); //expected value 5 because b is declared in global scope unlike a;

//--Description--
// let a = b; a is declared in local scope because of let.
// b = 5; watchout theere is not any let or var etc. That's why b is declared in global scope..

//Reference: https://www.coderbyte.com/algorithm/10-common-javascript-interview-questions
