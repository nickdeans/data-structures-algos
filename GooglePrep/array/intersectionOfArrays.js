// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const intersect = (nums1, nums2) => {
    let map = {};
    arr = [];
    
    for(let i = 0; i < nums1.length; i++) {
        if(!map[nums1[i]]) {
            map[nums1[i]] = 1;
        } else {
            map[nums1[i]] += 1
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        if(map[nums2[i]] > 0) {
            arr.push(nums2[i])
            map[nums2[i]]--
        }
    }
    
    return arr;
};

// Answer if results cannot have duplicate pairs
const intersection = (nums1, nums2) => {
    let map = {};
    let result = [];
    
    for(let i = 0; i < nums1.length; i++) {
        if(!map[nums1[i]]) {
            map[nums1[i]] = 1;
        } else {
            map[nums1[i]]++
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        if(map[nums2[i]] && map[nums2[i]] > 0) {
            result.push(nums2[i]);
            map[nums2[i]] = 0;
        }
    }
    return result;
};