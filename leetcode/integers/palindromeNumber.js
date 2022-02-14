// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

const isPalindrome = (x) => {
    if(x < 0) {
        return false;
    }
    
    x = x.toString();
    
    let i = 0;
    let j = x.length - 1;
    
    while(i < j) {
        if(x[i] !== x[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};