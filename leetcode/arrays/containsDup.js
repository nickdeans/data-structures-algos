// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    const map = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]] += 1
        }
    }
    
    for(let [key, value] of Object.entries(map)) {
        if(value > 1) {
            return true
        } 
    }
    
    return false;
    
//     for(let i = 0; i < nums.length; i++) {
//         map[nums[i]] = map[nums[i]] + 1 || 1;
        
//         if(map[nums[i]] > 1) {
//             return true;
//         }
//     }
//     return false;
};