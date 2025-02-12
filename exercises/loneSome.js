module.exports.run = function (a, b, c) {
	/*
	Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

	Examples:
		function(1, 2, 3) => 6
		function(3, 2, 3) => 2
		function(3, 3, 3) => 0

	Write your code below the comment.

	*/
	let inputArr = [a, b, c]

	let numCache = {}

	inputArr.forEach(int => {
		if (numCache[int] || numCache[int] === 0) {
			numCache[int] = 0
		} else {
			numCache[int] = int
		}
	})

	console.log('numCache', numCache)

	let noDupes = Object.values(numCache)
	function myFunc(total, num) {
		return total + num;
	}

	return noDupes.reduce(myFunc)

};
