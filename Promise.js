function getData() {
	return new Promise((resolve, reject) => {
		let data = 'asd';
		if (data !== null) {
			resolve(console.log('Process has just started!'));
		} else {
			reject(new Error('An error occured'));
		}
	});
}

let A = function() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve('A is working now!');
		}, 2000);
	});
};

let B = function() {
	return new Promise((resolve, reject) => resolve('B is working now!'));
};
let C = function() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve('C is working now!');
		}, 2000);
	});
};
let D = function() {
	console.log('D is working now!');
};

function showError(error) {
	console.log(error);
}

getData()
	.then(A)
	.then((data) => {
		console.log(data);
		return B();
	})
	.then((data) => {
		console.log(data);
		return C();
	})
	.then((data) => {
		console.log(data);
		return D();
	})
	.catch(showError);
