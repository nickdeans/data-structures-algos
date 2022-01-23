// Given an array of integers, where all elements but one occur twice, find the unique element.

const lonelyinteger = (a) => {
    // Write your code here
    let count={}
    
    for(let i = 0; i < a.length; i++){
    if(!count[a[i]]){
      count[a[i]] = 1
    } else {
      count[a[i]] += 1
    }
  }
    let number = Object.values(count)
    console.log(number)
  
    for(let [key, value] of Object.entries(count)) {
    if(value === 1){
      return key
    }
  }    
}