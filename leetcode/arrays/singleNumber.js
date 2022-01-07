// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const singleNumber = (nums) => {
    let map = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1
        }
    }
    
    for(let [key, value] of Object.entries(map)) {
        if(value === 1) {
            return key;
        }
    }
}; 