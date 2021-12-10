// Write a method to replace all spaces in a string with '%20'

const urlChange = (str) => {
    newStr = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            newStr += '%20'
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}