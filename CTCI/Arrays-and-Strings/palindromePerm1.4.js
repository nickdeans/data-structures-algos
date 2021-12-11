// Given a string write a function to check if it is a permutation of a palindrome.
// Palindrome: word or phrase that is the same forward and backwards.
// Permutation: arrangement of letters

const palindromePerm = (str) => {
    let map = {};
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
          continue;
        }

        if(map[str[i]]) {
            delete map[str[i]]
        } else {
            map[str[i]] = true;
        }
        count++
    }

    if(count % 2 === 0) {
        return Object.keys(map).length === 0;
    } else {
        return Object.keys(map).length === 1;

    }
}