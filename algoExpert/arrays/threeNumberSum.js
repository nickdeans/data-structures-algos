//   Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. The function should find all triplets in
// the array that sum up to the target sum and return a two-dimensional array of
// all these triplets. The numbers in each triplet should be ordered in ascending
// order, and the triplets themselves should be ordered in ascending order with
// respect to the numbers they hold.

const threeNumberSum = (array, targetSum) => {
    array.sort((a,b) => a - b)
      let triplets = [];
      
      for(let i = 0; i < array.length - 2; i++) {
          let left = i + 1;
          let right = array.length - 1;
          while(left < right) {
              let currentSum = array[i] + array[left] + array[right];
              if(currentSum === targetSum) {
                  triplets.push([array[i], array[left], array[right]])
                  left++
                  right--
              } else if(currentSum < targetSum) {
                  left++;
              } else if(currentSum > targetSum) {
                  right--
              }
          }
      }
      return triplets;
  }