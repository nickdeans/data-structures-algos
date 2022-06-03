const isValidSubsequence = (array, sequence) => {
	let sequenceIdx = 0;
	for(let i = 0; i < array.length; i++) {
		if(array[i] === sequence[sequenceIdx]) {
			sequenceIdx++
		}
		if(sequenceIdx === sequence.length) {
			return true;
		}
	}
	return false;
}

const isValidSubsequence = (array, sequence) => {
  if(array.length < sequence.length) {
    return false;
  }

  let count = 0;

  for(let i = 0; i < array.length; i++) {
    if(array[i] === sequence[count]) {
      count++
    }
  }

  if(count === sequence.length) {
    return true;
  } else {
    return false;
  }
}