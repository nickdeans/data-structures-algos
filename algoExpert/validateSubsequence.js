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

