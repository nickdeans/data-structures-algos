// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
    let map = {};
    let majority = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] +=1
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] > majority) {
            majority = number;
        }
    }
    return majority;
};

    // let number = [...Object.keys(map)];
    // console.log(number)
    // let newNumber = number.sort();
    // return nums[newNumber.length - 1];