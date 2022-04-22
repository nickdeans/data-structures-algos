// Write a function that takes in an array of strings and groups anagrams together.
// Anagrams are strings made up of exactly the same letters, where order doesn't
// matter. For example, 'cinema' and 'iceman' are anagrams: similarily 'foo' and 'ofo' are
// anagrams. Your function should return a list of anagrams groups in no particular order.

const groupAnagrams = (words) => {
    let map = {};
  
    for(let i = 0; i < words.length; i++) {
        let newWord = words[i].split('').sort().join('');
        if(!map[newWord]) {
            map[newWord] = [words[i]];
        } else {
            map[newWord].push(words[i])
        }
    }
    return Object.values(map)
  }