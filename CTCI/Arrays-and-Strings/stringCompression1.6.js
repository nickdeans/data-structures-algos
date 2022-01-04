// Implement a mehtod to perform basic string compression using the counts of repeated characters. 
// For example, string aabcccccaaa would become a2b1c5a3. You can assume str has only
// uppercase and lowercase letters

const stringComp = (str) => {
    let out = '';
    let count = 1;

    for(let i = 0; i < str.length; i++) {
        let cur = str[i];
        let next = str[i + 1];
        if(cur === next) {
            count++
        } else {
            out += cur + String(count);
            count = 1
        }
    }
    return out.length < str.length ? out : s;
}