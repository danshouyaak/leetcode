/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    //dp[j]:凑成总金额j的货币组合数为dp[j]
    //递推公式dp[j] += dp[j - coins[i]] 已有coins[i] 的情况下 还需要 j - coins[i]种方法
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1


    //不强调元素的顺序
    for (let i = 0; i < coins.length; i++) {//先遍历物品
        //每次相加都是当前元素往后加 防止元素重复组合
        for (let j = coins[i]; j <= amount; j++) {//遍历背包
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[amount]
};