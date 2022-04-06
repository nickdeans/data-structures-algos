// Write a function that takes in a non-empty string and that returns a boolean
// representing whether the string is a palindrome.
// A palindrome is defined as a string that's written the same forward and
// backward. Note that single-character strings are palindromes.

const isPalindrome = (string) => {
  let start = 0; 
  let end = string.length - 1;
  
  while(start < end) {
      if(string[start] !== string[end]) {
          return false;
      } 
      start++
      end--
  }
  return true;
}

const isPalindrome = (string) => {
    let reversedStr = '';
      
      for(let i = string.length - 1; i >= 0; i--) {
          reversedStr += string[i]
      }
      
      return string === reversedStr;
  }