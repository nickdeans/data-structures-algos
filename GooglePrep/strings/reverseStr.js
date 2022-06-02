// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
};

// const reverseString = function(s) {
// 	let reversedString = '';
// 	for (let i = s.length - 1; i >= 0; i --) {
// 		reversedString += s[i];
// }
// return reversedString;
// }