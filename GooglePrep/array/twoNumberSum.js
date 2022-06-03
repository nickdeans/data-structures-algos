const twoNumberSum = (array, targetSum) => {
	let newArray = [];
	let map = {};
	
	for(let i = 0; i < array.length; i++) {
		let complement = targetSum - array[i];
		
		if(complement in map) {
			newArray.push(complement, array[i])
			return newArray
		} else {
			map[array[i]] = array[i]
		}
	}
	return newArray;
}

const twoNumberSum = (array, targetSum) => {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === targetSum) {
        return [array[i], array[j]]
      }
    }
  }
  return [];
}