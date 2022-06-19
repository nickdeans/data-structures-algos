//   Write a function that takes in a "special" array and returns its product sum.
//   A "special" array is a non-empty array that contains either integers or other
//   "special" arrays. The product sum of a "special" array is the sum of its
//   elements, where "special" arrays inside it are summed themselves and then
//   multiplied by their level of depth.

const productSum = (array, multiplier = 1) => {
  let sum = 0;
  for(const i of array) {
    if(Array.isArray(i)) {
      sum += productSum(i, multiplier + 1);
    } else {
      sum += i;
    }
  }
  return sum * multiplier
}