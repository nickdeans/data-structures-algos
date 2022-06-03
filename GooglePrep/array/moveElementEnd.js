const moveElementToEnd = (array, toMove) => {
  let idx = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== toMove) {
      array[idx] = array[i]
      if(i !== idx) {
        array[i] = toMove;
      }
      idx++
    }
  }
  return array
}

const moveElementToEnd = (array, toMove) => {

  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] === toMove && array[j] !== toMove) {
        array[i] = array[j];
        array[j] = toMove;
        break;
      }
    }
  }
  return array;
}