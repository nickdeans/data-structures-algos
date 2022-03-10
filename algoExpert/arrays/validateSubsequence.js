// Given two non-empty arrays of integers, write a function that determines whether
// the second array is a subsequence of the first one.

const isValidSubsequence = (array, sequence) => {
    let arrIdx = 0;
    let seqIdx = 0;
    while(arrIdx < array.length && seqIdx < sequence.length) {
        if(array[arrIdx] === sequence[seqIdx]) {
            seqIdx++
        } 
        arrIdx++
    }
    return seqIdx === sequence.length;
}

// Alternative way more intuitive for me
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