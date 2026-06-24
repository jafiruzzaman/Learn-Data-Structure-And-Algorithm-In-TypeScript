/**
 * @file buy-sell-stock.ts
 * @description best time to buy and sell stock
 */

export {};
function maxProfit(arr: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of arr) {
    minPrice = Math.min(minPrice, price);

    let profit = price - minPrice;

    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

const arr: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));
