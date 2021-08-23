module.exports.run = function (csv) {
	/*
		A stringified CSV file will be passed into this function.
		Parse the string so it is an array of objects and return the array.
		The object properties are the header of the csv file, and the very first row of the csv file are the headers.

		Example

		function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
			[
				{FirstName: Dan, LastName: Tran, Age: 29},
				{FirstName: Don, LastName: Tran, Age: 25},
				{FirstName: Jasmine, LastName: Tran, Age: 13},
			]

		Write your code below the comment.
	*/


	// let parsedStr = JSON.parse(csv)  //Instructions on line 4 say 'Parse the string' however it errors out when parsing.
	let parsedStr = csv
	let parsedArr = parsedStr.split("/n");
	let headers = [parsedArr.shift()]
	headers = [...headers[0].split(",")]

	let finalList = []

	for (let i = 0; i < parsedArr.length; i++) {
		const headersObj = {}
		let currentPerson = parsedArr[i].split(",")

		for (let j = 0; j < headers.length; j++) {
			headersObj[headers[j]] = currentPerson[j]
		}

		finalList.push(headersObj)
	}
	return finalList;

};
