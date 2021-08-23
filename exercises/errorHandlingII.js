module.exports.run = async function (url) {
	/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

	You are welcome to change this function to an async/await.

	Write your code below the comment.
	*/


	//Instructions state to add 'Error: ' to the beginning of message. message already has this intro
	const axios = require('axios');

	try {
		const response = await axios.get(`${url}`);
	} catch (errors) {
		return `${errors}`
	}


};
