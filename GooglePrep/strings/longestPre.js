// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if(strs.length === 0) {
      return '';
  }
    
  let newStr = '';
    
  for(let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return newStr;
    }
    newStr += strs[0][i];
  }
  return newStr;
};