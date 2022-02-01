// We define super digit of an integer x using the following rules:
// Given an integer, we need to find the super digit of the integer.
// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of .
// For example, the super digit of 9875 will be calculated as:
// 	super_digit(9875)   	9+8+7+5 = 29 
// super_digit(29) 	          2 + 9 = 11
// super_digit(11)		       1 + 1 = 2
// super_digit(2)		             = 2  

const superDigit = (n, k) => {
    // Write your code here
    // create counter of super int
    // split n integer into seperate integers
    // loop through split integers
    // if only one value return number
    // add values to count
    let superInt = 0;
    
    let newInt = n.split('');
    
    for(let i = 0; i < newInt.length; i++) {
        if(newInt.length === 1) {
            return newInt[i]
        } else {
            superInt += (k * parseInt(newInt[i]))
        }
    }
    return superDigit(superInt.toString(), 1);
}