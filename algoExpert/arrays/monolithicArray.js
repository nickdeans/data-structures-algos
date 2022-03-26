// Write a function that takes in an array of integers and returns a boolean
// representing whether the array is monotonic.
// An array is said to be monotonic if its elements, from left to right, are
// entirely non-increasing or entirely non-decreasing.
//  Non-increasing elements aren't necessarily exclusively decreasing; they simply
// don't increase. Similarly, non-decreasing elements aren't necessarily
// exclusively increasing; they simply don't decrease.
// Note that empty arrays and arrays of one element are monotonic.

const isMonotonic = (array) => {
    if(array.length === 0) {
        return true;;
    }
	
    for(let i = 0; i < array.length; i++) {
    if(array[i] === array[i + 1]) {
        continue;
    } else if(array[i] < array[i + 1]) {
            for(let i = 0; i < array.length; i++) {
                if(array[i] > array[i + 1]) {
                    return false;
                }
            }
            return true;
    } else {
            for(let i = 0; i < array.length; i++) {
                if(array[i] < array[i + 1]) {
                    return false;
                }
            }
            return true;
        }
}
}