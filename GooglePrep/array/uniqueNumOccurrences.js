// Given an array of integers arr, return true if the number of occurrences of each 
// value in the array is unique, or false otherwise.

const uniqueOccurrences = (arr) => {
    let map = {};
    
    for(let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = 1
        } else {
            map[arr[i]] += 1
        }
    }
    
    let count = Object.values(map)
    
    for(let i = 0; i < count.length; i++) {
        for(let j = i + 1; j < count.length; j++) {
            if(count[i] === count[j]) {
                return false
            }
        }
    }
    return true;
};