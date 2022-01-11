// Write functions that reverses strings in three different ways

// Created using built in JS methods
const reverseStr = (str) => {
    let newStr = str.split('').reverse().join('');
    return newStr;
}

// Completed by creating new string
const reverseStr = (str) => {
    let newStr = '';
  
    for(let i = str.length - 1; i >= 0; i--) {
      newStr += str[i]
    }
  
    return newStr;
}
  
// Done in-place with O(1) memory
const reverseStr = (str) => {
    let i = 0;
    let j = str.length - 1;
  
    while(i < j) {
      [str[i], str[j] = str[j], str[i]]
      i++;
      j--
    }
}