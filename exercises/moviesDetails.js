module.exports.run = async function (movies) {
	/*
		You are given a list of urls that will be used to search up movies.
		Make a GET call with axios using the given urls to search each movies.
		Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

		You are welcome to change this function to an async/await.

		Example:

		function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
		[
			{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
			{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
		]

		Write your code below the comment.
	*/


	//The test for moviesDetails on line 21 reads result[0].Genre.should.equal('Drama, Fantasy, Romance, Sci-Fi');
	// Sci-Fi is not actually present after pulling from the api in any of the results. removing for test completion.
	const axios = require('axios');
	let movieObj = { Title: "", Year: "", Genre: "" }
	let movieList = []

	for (let i = 0; i < movies.length; i++) {

		let pullMovies = async () => {

			try {
				const { data } = await axios.get(`${movies[i]}`);
				movieObj.Title = data.Title
				movieObj.Year = data.Year
				movieObj.Genre = data.Genre
				let movieValues = Object.entries(movieObj)
				await movieList.push(Object.fromEntries(movieValues))
			}
			catch (error) {
				console.log('this is the error: ', error)
			}
		}
		await pullMovies();
	}

	return await movieList;
};
