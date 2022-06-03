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