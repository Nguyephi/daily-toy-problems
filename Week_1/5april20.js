/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

o: int; max profit
i: arr; prices
c: can we get it in linear time?
e:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

declare tempMax = 0 bestMax = 0
iterate through the input prices
  if current is greater than next price just continue to next iteration
  else if current is lower (figure out profit)
    let tempProfit = next - current
    tempMax = max between tempMax + (temprofit), tempprofit
    bestMax = max between estMax and tempmax

return bestMax
*/

// function maxProfit(prices) {


//   for (let i = 0; i < prices.length; i++) {
//     let current = prices[i];
//     let nextPrice = prices[i+1];
//     if (current > nextPrice) continue;

//     if (current < nextPrice) {
//       let profit = nextPrice - current
//       bestMax += profit
//     }
//   }

//   return bestMax
// }

//leetcode solution
// function maxProfit(prices) {
//   let maxProfit = 0
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i-1]) {
//       maxProfit += current - prev
//     }
//   }
//   return maxProfit;
// }

// good time solution
let maxProfit = (prices) => {
  let min = prices[0];
  let profit = 0;

  for(let i = 1; i<prices.length; i++){
      if(prices[i] < min)
          min = prices[i];

      if(prices[i] > min){
          if(i + 1 == prices.length)
              profit += prices[i] - min;
          else if(prices[i+1] < prices[i]){
              profit += prices[i] - min;
              min = prices[i+1];
          }
      }
  }

  return profit;
};


let input1 = [7,6,4,3,1]
let input2 = [7,1,5,3,6,4]
let input3 = [1,2,3,4,5]
console.log(maxProfit(input3))