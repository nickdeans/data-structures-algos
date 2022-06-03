const arrayOfProducts = (array) => {
  let newArray = [];
  let product = 1;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(j !== i) {
        product *= array[j]
      }
    }5
    newArray.push(product);
    product = 1;
  }
  return newArray;
}