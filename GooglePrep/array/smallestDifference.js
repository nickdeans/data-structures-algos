const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let idxOne = 0;
	let idxTwo = 0;
	let current = Infinity;
	let smallest = Infinity;
	let smallestAbsSum = [];
	
	while(idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		if(arrayOne[idxOne] < arrayTwo[idxTwo]) {
			current = arrayTwo[idxTwo] - arrayOne[idxOne];
			idxOne++
		} else if(arrayOne[idxOne] > arrayTwo[idxTwo]) {
			current = arrayOne[idxOne] - arrayTwo[idxTwo];
			idxTwo++
		} else {
			return [arrayOne[idxOne], arrayTwo[idxTwo]]
		}
		
		if(smallest > current) {
			smallest = current;
			smallestAbsSum = [arrayOne[idxOne], arrayTwo[idxTwo]]
		}
	}
	return smallestAbsSum;
}

const smallestDifference = (arrayOne, arrayTwo) => {
  let absolute = Infinity;
  let newArr = [];
  for(let i = 0; i < arrayOne.length; i++) {
    for(let j = 0; j < arrayTwo.length; j++) {
      let result = Math.abs(arrayOne[i] - arrayTwo[j])
      if(result < absolute) {
        absolute = result;
        newArr = []
        newArr.push(arrayOne[i], arrayTwo[j])
      }
    }
  }
  return newArr;
}