// Given a string s, return true if it is a palindrome, or false otherwise.
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const isPalindrome = (s) => {
    // Modifying the string instead of creating new one
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        if(s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true;
};