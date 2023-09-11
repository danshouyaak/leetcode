/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    //dp[i][0] 持有
    //dp[i][1] 不持有

    let dp = Array(prices.length).fill(0).map(() => Array(2).fill(0))
    dp[0][0] = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
    }
    return dp[prices.length][1]
};