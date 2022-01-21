// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const miniMaxSum = (arr) => {
    // Write your code here
    let min = 0;
    let max = 0;
    let newArr = arr.sort()
    
    for(let i = 0; i < newArr.length - 1; i++) {
        min += newArr[i]
    }
    for(let i = newArr.length - 1; i >= 1; i--) {
        max += newArr[i]
    }
    
    console.log(min, max)
}

const miniMaxSum = (arr) => {
    // Write your code here
    let newArr = arr.sort();
    let sum = 0;
    
    for(let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    
    let min = sum - newArr[4]
    let max = sum - newArr[0]
    
    console.log(min, max)
    
}