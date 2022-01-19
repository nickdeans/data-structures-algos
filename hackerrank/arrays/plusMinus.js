// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

const plusMinus = (arr) => {
    // Write your code here

    let pos = 0;
    let neg = 0;
    let zer = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            zer++
        } else if(arr[i] > 0) {
            pos++
        } else if(arr[i] < 0) {
            neg++
        }
    }
    
    let positive = pos / arr.length
    let negative = neg / arr.length
    let zero = zer / arr.length
    
    console.log(positive.toFixed(6), '\n' + negative.toFixed(6), '\n' + zero.toFixed(6))

}