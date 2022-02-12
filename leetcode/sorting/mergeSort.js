// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 
// respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

const merge = (nums1, m, nums2, n) => {
    //we don't want the length, we want the start position of the final elements
    m--;
    n--;
    
    while (m + n >= -1) {
        //If bigger, or nothing left in nums2, copy it over
        if ( (nums1[m] > nums2[n] ) || n < 0) {
            nums1[m + n + 1] = nums1[m];
            m--;
        } else {
            nums1[m + n + 1] = nums2[n];
            n--;
        }
    }
};