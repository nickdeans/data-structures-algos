// Write a function that takes in a non-empty array of integers and returns an
// array of the same length, where each element in the output array is equal to
// the product of every other number in the input array.
// In other words, the value at output[i]  is equal to the product of
// every number in the input array other than input[i]

const arrayOfProducts = (array) => {
    let newArr = [];
    let productCount = 1;
      
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(j !== i) {
                productCount *= array[j];
            }
        }
            newArr.push(productCount);
            productCount = 1;
    }
    return newArr;
  }