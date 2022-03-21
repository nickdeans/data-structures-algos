// Given an array of positive integers representing the values of coins in your
// possession, write a function that returns the minimum amount of change (the 
// minimum sum of money) that you cannot create. The given coins can have
// any positive integer value and aren't necessarily unique (i.e., you can have
// multiple coins of the same value)



const nonConstructibleChange = (coins) => {
    coins.sort((a,b) => a - b)
      
    let minChange = 0;
      for(let i = 0; i < coins.length; i++) {
          if(coins[i] > minChange + 1) {
              return minChange + 1;
          } else {
              minChange += coins[i]
          }
      }
      return minChange + 1;
  }
  
  // sort integer array
  // create minChange counter
  // iterate over array
  // conditional if coin at idx > counter + 1
  // return counter + 1
  // else add coin at idx to counter
  // all else return counter + 1
  