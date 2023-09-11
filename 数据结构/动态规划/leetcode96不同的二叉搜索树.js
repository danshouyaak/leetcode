/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    //1.dp数组的确定
    let dp = new Array(n + 1).fill(0)
    //2.dp数组的初始化
    dp[0] = dp[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
            //dp[j - 1]是指在j的左边的节点有多少种情况
            //dp[i - j]是指j右边的节点有多少种情况
            ///dp[i - 1] * dp[i - j]是指当前的所有情况，然后给他累加起来
        }
    }
    return dp[n]
}