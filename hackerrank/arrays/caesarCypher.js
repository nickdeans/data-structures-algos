// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, 
// just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

const caesarCipher = (s, k) => {
    // Write your code here
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let newStr = s.toLowerCase();
    let resultStr = '';
    
    for(let i = 0; i < newStr.length; i++) {
        const isLetter = alphabet.includes(newStr[i]);
        if(isLetter === false) {
            resultStr += newStr[i];
        } else {
            const charIndex = alphabet.findIndex((c) => c === newStr[i])
            resultStr += alphabet[charIndex + k] || alphabet[charIndex - k]
        }
    }
    return resultStr;
}