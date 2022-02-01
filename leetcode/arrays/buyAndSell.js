// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of 
//the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

const maxProfit = prices => {
    // Start with nothing and take every profitable opportunity from time travel
    let profit = 0;
    // Start from the second day (because that is the first day you could sell)
    for (let i = 1; i < prices.length; i++) {
      // Our Delorean only goes back 1 day, but that is all we need
      const priceYesterday = prices[i - 1];
      const priceToday = prices[i];
      // Whenever there is profit, engage that Flux Capacitor!
      if (priceYesterday < priceToday) {
          profit += priceToday - priceYesterday;
      }
      // Buy yesterday; sell today
    }
    // Take every Monday off!
    return profit;
    // Time travel trading makes every weekend is a three-day weekend!
  };

  // Another way to solve
  const maxProfit = function(prices) {
    let count = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < prices[i + 1]) {
            count += prices[i + 1] - prices[i]
        }
    }
    return count;
};