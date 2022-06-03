const isMonotonic = (array) => {
  let idx = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[idx] > array[idx + 1]) {
      for(let i = 0; i < array.length; i++) {
        if(array[i] < array[i + 1]) {
          return false;
        }
      }
    } else if(array[idx + 1] > array[idx]) {
      for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i + 1]) {
          return false;
        }
      }
    } else {
      idx++
    }
  }
  return true;
}