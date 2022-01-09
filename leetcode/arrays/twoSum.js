// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
    // Create a new map object
    let map = {};
    // Iterate through the numbers
    for(let i = 0; i <= nums.length; i++) {
        // calculate the complement of the target value
        let complement = target - nums[i];
        // if the complement is already found
        if(complement in map) {
            // return the index of the complement, and current index
            return [map[complement], i]
        } else {
            // else, add the number to the map
            map[nums[i]] = i;
        }
    }
};