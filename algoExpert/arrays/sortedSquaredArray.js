// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

const sortedSquaredArray = (array) => {
	let newArray = [];
	
	for(let i = 0; i < array.length; i++) {
		newArray.push(array[i] * array[i])
	}
  
	// sort method for numeric values
	newArray.sort((a,b) => a - b)
	return newArray
}


const sortedSquaredArray = (array) => {
    // I can create an array with same length and filled with 0s
      // let newArray = new Array(array.length).fill(0);
      
      // I can create nw array with given array and assign new values
    let newArray = [...array]
      
      let i = 0;
      let j = array.length - 1;
      
      for(let idx = array.length - 1; idx >= 0; idx--) {
                  if((array[i] * array[i]) < (array[j] * array[j])) {
                      newArray[idx] = (array[j] * array[j])
                      j--
                  } else {
                      newArray[idx] = (array[i] * array[i])
                      i++
              }
      }
      return newArray;
  }