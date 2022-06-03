const sortedSquaredArray = (array) => {
	let newArray = [];
	
	for(let i = 0; i < array.length; i++) {
			newArray.push(array[i] * array[i])
	}
  
	// sort method for numeric values
	newArray.sort((a,b) => a - b)
	return newArray
}