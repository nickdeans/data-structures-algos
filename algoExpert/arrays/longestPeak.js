//  Write a function that takes in an array of integers and returns the length of
// the longest peak in the array.
// A peak is defined as adjacent integers in the array that are strictly decreasing.
// At least three integers are required to form a peak.
// For example, the integers 1,4,10,0 form a peak
// Sample input array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
// Output is 6

const longestPeak = (array) => {
    let peakCount = 0;
    let currentCount = 1;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < array[i + 1]) {
            currentCount++
            if(array[i + 1] === array[i + 2]) {
                currentCount = 1;
                continue;
            }
            
            let count = i + 2;
            let count2 = 1
            if(array[i + 1] > array[count]) {
                currentCount++
                while(array[count] > array[count + count2]) {
                    currentCount++
                    count++
                }
                
                if(currentCount > peakCount) {
                peakCount = currentCount;
                currentCount = 1;
                }
            }
        }
    }
    return peakCount;
  }