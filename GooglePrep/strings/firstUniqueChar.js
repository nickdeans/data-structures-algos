// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1.

const firstUniqChar = (s) => {
    let map = {};
    
    for(let i = 0; i < s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};