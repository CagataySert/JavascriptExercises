function myFunc() {
	let privateVariable = 'May I acces it?';
}

myFunc.prototype.GetPrivateVariable = function() {
	console.log(privateVariable);
};

//console.log(privateVariable) -> throws error because of privateVariable is declared in local scope.

//console.log(myFunc.prototype.GetPrivateVariable()); -> throws error again. U can not access constructor variables.

//U can access the private variable by doing this:

function mySecondFunc() {
	let privateVariable = 'May I access it?';
	return function() {
		return privateVariable;
	};
}

getPrivateVariable = mySecondFunc();
console.log(getPrivateVariable());
