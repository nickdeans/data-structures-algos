// Given a non-empty string of lowercase letters and a non-negative integer
// representing a key, write a function that returns a new string obtained by
// shifting every letter in the input string by k positions in the alphabet,
// where k is the key.
// Note that letters should "wrap" around the alphabet; in other words, the
// letter z shifted by one returns the letter a

const caesarCipherEncryptor = (string, key) => {
    let newStr = '';
    let newKey = key % 26
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let i = 0; i < string.length; i++) {
        let newLetterCode = alphabet.indexOf(string[i]) + newKey;
        newStr += alphabet[newLetterCode % 26]
    }
    return newStr
}