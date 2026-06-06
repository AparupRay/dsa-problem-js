const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      console.log("minPrice: ", minPrice);
    }
    let profit = prices[i] - minPrice;
    console.log("Profit: ", profit);
    if (profit > maxProfit) {
      maxProfit = profit;
      console.log("MaxProfit: ", maxProfit);
    }
  }
  return maxProfit;
};

console.log("MaxProfit: ", maxProfit([7, 1, 5, 3, 6, 4]));
