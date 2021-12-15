// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

var removeDuplicates = function(nums) {
    let j = 0;
        
    for(let i = 0; i < nums.length; i++) {
        if(nums[j] !== nums[i]) {
            nums[j + 1] = nums[i];
            j++
        }
    }
    return j + 1;
    };
    
    
//     //since array is already sorted, all ocurences will appear next to each other
//     //if the next element is same as the current element splice it
//     //otherwise just move to the next element
//     //For instance in array [1, 1, 2]
//     //Since nums[0] === nums[1]; splice nums[1]
//     //Splice alters the array in place so length will become now 2
//     // Dont increment i; compare nums[0] with nums[0+1] (i.e. 2 now)
//     //Since nums[0]!==nums[1] (1!==2) so increment i
//     for(let i=0; i<nums.length; ) {
//         if(nums[i] === nums[i+1]) {
//             nums.splice(i+1, 1);
//         }
//         else {
//             i += 1;
//         }
        
//     }
//     return nums.length
// };