// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums) => {
    var idx = 0;
    for(var i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        nums[idx] = nums[i];
          if (idx !== i) {
              nums[i] = 0;
          }
        idx++;
      }
    }
  return nums;
      
      // [0,1,0,3,4]
      // [1,0,0,3,4]
      // [1,3,0,0,4]
      // [1,3,4,0,0]
  
      // Must start at end because numbers spliced resets index numbers and ends up skipping a value
      // for(let i = nums.length - 1; i >= 0; i--){
      //     if(nums[i]===0){
      //         nums.push(0) 
      //         nums.splice(i,1)
      //     }
      // }
      // return nums
      
  };