// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
    let start = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[start] = nums[i];
            if(i !== start) {
                nums[i] = 0;
            }
            start++
        }
    }
    return nums;
};