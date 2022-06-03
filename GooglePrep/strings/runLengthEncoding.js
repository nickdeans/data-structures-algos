const runLengthEncoding = (string) => {
  let newStr = '';
  let count = 1;

  for(let i = 1; i < string.length; i++) {
    if(string[i] !== string[i - 1] || count >= 9) {
      newStr += count;
      newStr += string[i - 1];
      count = 0;
    }
    count++
  }

  newStr += count;
  newStr += string[string.length - 1]
  return newStr;
}
