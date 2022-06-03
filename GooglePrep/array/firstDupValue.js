const firstDuplicateValue = (array) => {
  let map = {};

  for(let i = 0; i < array.length; i++) {
    if(!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++
    }

    if(map[array[i]] > 1) {
      return array[i];
    }
  }
  return -1
}