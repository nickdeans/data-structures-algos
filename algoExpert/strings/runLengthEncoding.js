// Write a function that takes in a non-empty string and returns its run-length
// encoding.
// From Wikipedia, "run-length encoding is a form of lossless data compression in
// which runs of data are stored as a single data value and count, rather than as
// the original run." For this problem, a run of data is any sequence of
// consecutive, identical characters. So the run AAA would be encoded as 3A.A  To make things more complicated, however, the input string can contain all
// sorts of special characters, including numbers. And since encoded data must be
// decodable, this means that we can't naively run-length-encode long runs. For
// example, the run AAAAAAAAAAAA or 12A can't be over 10.
// It should be encoded as 9A3A


// Runtime is O(n2) because I used a string
const runLengthEncoding = (string) => {
    let newStr = '';
    let count = 1;
    
    for(let i = 1; i < string.length; i++) {
        let current = string[i];
        let prev = string[i - 1];
        
        if(current !== prev || count === 9) {
            newStr += count;
            newStr += prev;
            count = 0;
        }
        count++
    }
    
    newStr += count;
    newStr += string[string.length - 1]

    return newStr;
  }

// Using an array allows for better runtime O(n) 
const runLengthEncoding = (string) => {
    let newArray = [];
    let count = 1;
    
    for(let i = 1; i < string.length; i++) {
        let current = string[i];
        let prev = string[i - 1];
        
        if(current !== prev || count === 9) {
            newArray.push(count.toString());
            newArray.push(prev)
            count = 0
        }
        count++
    }
    
    newArray.push(count.toString());
    newArray.push(string[string.length - 1])

    return newArray.join('')
  }