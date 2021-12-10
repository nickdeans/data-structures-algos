// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

const isUnique = (str) => {
    let map = {};

    for(let i = 0; i < str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]] += 1;
        }
    }

    for(let [key, value] of Object.entries(map)) {
        if(value > 1) {
            return false;
        }
    }
    return true;
}