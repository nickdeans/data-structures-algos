// Given an array of integers between 1 and n where n is the length of the array, write a function
// that returns the first integer that appears more than once (when the array is
// read from left to right).   In other words, out of all the integers that might occur more than once in the
// input array, your function should return the one whose first duplicate value
// has the minimum index.   If no integer appears more than once, your function should return -1

const firstDuplicateValue = (array) => {
    let map = {};
      
      for(let i = 0; i < array.length; i++) {
          if(!map[array[i]]) {
              map[array[i]] = 1
          } else {
              map[array[i]] += 1
          }
          
          if(map[array[i]] > 1) {
              return array[i]
          }
      }
      return -1;
  }