const fetch = require('node-fetch');

var getData = async function() {
	try {
		var response = await fetch('https://jsonplaceholder.typicode.com/posts');
		var data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
};

getData();

// OR

var getData2 = async function() {
	await fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((reason) => console.log(reason.message));
};

getData2();
