//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.

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