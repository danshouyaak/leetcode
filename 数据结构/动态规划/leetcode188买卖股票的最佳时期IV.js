/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
//一天一共有 k * 2个状态
//0没有操作(可以不用设置)
//1.第一次持有股票
//2.第一次不持有股票
//3.第二次持有股票
//4.第二次不持有股票
var maxProfit = function (k, prices) {
    ///只需要控制k的循环
    let dp = Array(prices.length).fill(0).map(() => Array(k * 2 + 1).fill(0))
    dp[0][1] = dp[0][3] = -prices[0]

    //初始化 每次卖出的初始化都为 -prices[0]
    for (let j = 1; j <= k * 2; j += 2) {
        dp[0][j] = -prices[0]
    }

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j <= 2 * k; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]) //买入 
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i])
        }
    }
    return dp[prices.length - 1][k * 2]
};


// 方法二：动态规划+空间优化  判断 第i次为奇偶数 滚动数组
var maxProfit = function (k, prices) {

}