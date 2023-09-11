/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (!amount) return 0

    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 0; i < coins.length; i++) {
        //正序遍历背包 每个硬币可以多个选择
        for (let j = coins[i]; j <= amount; j++) {
            //遍历物品
            //只有dp[j - coins[i]]不是初始最大值为时 该位才有选组的必要
            dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};