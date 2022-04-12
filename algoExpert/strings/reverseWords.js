// Write a function that takes in a string of words separated by one or more
// whitespaces and returns a string that has these words in reverse order. For
// example, given the string "tim is great" your function should return "great is tim"
// For this problem, a word can contain special characters, punctuation, and
// numbers. The words in the string will be separated by one or more whitespaces,
// and the reversed string must contain the same whitespaces as the original
// string. For example, given the string "whitespaces    4" you would be expected to return "4    whitespaces"

const reverseWordsInString = (string) => {
    const words = [];
      let start = 0;
      
      for(let i = 0; i < string.length; i++) {
          const char = string[i];
          
          if(char === ' ') {
              words.push(string.slice(start, i));
              start = i
          } else if(string[start] === ' ') {
              words.push(' ');
              start = i
          }
      }
      words.push(string.slice(start));
      reverseList(words);
    return words.join('')
  }
  
  const reverseList = (list) => {
      let start = 0;
      let end = list.length - 1;
      
      while(start < end) {
          const temp = list[start];
          list[start] = list[end];
          list[end] = temp
          start++
          end--
      }
  }