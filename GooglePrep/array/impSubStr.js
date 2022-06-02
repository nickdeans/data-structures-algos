// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

const strStr = (haystack, needle) => {
  if(needle.length === 0 && haystack.length === 0 ) {
    return 0;
  }

  for(let i = 0; i < haystack.length; i++) {
    if(haystack.substr(i, needle.length) === needle) {
      return i
    }
  }
  return -1
}