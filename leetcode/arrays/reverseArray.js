// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = (nums, k) => {
    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
  };
  
  //   for (let i = 0; i < k; i++) {
  //       nums.unshift(nums.pop());
  //   }
  
  //   return nums;