// You're given a string of available characters and a string representing a
// document that you need to generate. Write a function that determines if you
// can generate the document using the available characters. If you can generate
// the document, your function should return true; otherwise it should return false.

function generateDocument(characters, document) {
    let map = {};
      
    for(let i = 0; i < characters.length; i++) {
        if(!map[characters[i]]) {
            map[characters[i]] = 1;
        } else {
            map[characters[i]]++;
        }
    }
    
    for(let i = 0; i < document.length; i++) {
        if(!map[document[i]] || map[document[i]] < 0) {
            return false;
        } else {
            map[document[i]]--;
        }
    }
    return true;
  }