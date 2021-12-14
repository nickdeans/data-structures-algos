// There are three types of edits that can be performed on strings: insert a 
// character, remove a character, or replace a character. Given two strings
// write a function to check if they are one edit or zero edits away.

const oneAway = (str1, str2) => {
    let edits = 1;

    for(let i = 0, j = 0; i < str1.length || i < str2.length; i++, j++) {
        if(str1[i] !== str2[j]) {
            edits--;
            if(edits < 0) {
                return false;
            }

            if(str1[i] === str2[j + 1]) {
                j++
            } else if(str1[i + 1] === str2[j]) {
                i++
            }
        }
    }
    return true;
}
