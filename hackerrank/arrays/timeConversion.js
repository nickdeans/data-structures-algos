// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const timeConversion = (s) => {
    // Write your code here
    
    // 1. 12AM => 00
    // 2. 1AM to 12PM => Do Nothing
    // 3. 1PM to 11PM => Take Hour add 12
    
    let amPm = s[8];
    let militaryTime = '';
    
    if(amPm === 'A') {
        if(s[0] === '1' && s[1] === '2') {
            militaryTime = '00'
        } else {
            militaryTime = s.substring(0,2);
        }
    } else {
        if(s[0] === '1' && s[1] === '2') {
            militaryTime = s.substring(0,2);
        } else {
            militaryTime = parseInt(s.substring(0,2), 10) + 12
        }
    }
    return militaryTime + s.substring(2,8)
    
}
