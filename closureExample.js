//Write a function that would allow you to do this : multiply(5)(6);

function multiply(firstNumber) {
	return function(secondNumber) {
		return firstNumber * secondNumber;
	};
}

let result = multiply(5)(6);
console.log(result);
