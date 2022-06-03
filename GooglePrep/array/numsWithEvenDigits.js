// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let newNums = nums[i].toString();
        let newNumsArr = newNums.split('');
        if(newNumsArr.length % 2 === 0) {
            count++
        }
    }
    return count;
};

// const findNumbers = (nums) => {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         let s = '';
//         s = s + nums[i];
//         if(s.length % 2 === 0){
//             count++;
//         }
//     }
//     return count;
// };