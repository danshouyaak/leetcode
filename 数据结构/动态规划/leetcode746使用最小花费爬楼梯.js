var minCostClimbingStairs = function (cost) {
    //1.确定dp数组
    let dp = new Array(cost.length + 1)// 长度比cost数组多一位，需要跳出去
    //2.dp数组的初始化
    dp[0] = dp[1] = 0//

    for (let i = 2; i <= cost.length; i++) {
        //3.dp数组递推
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
        //dp[i]是由前一个dp + 当前当前跳的所消耗的 钱
    }
    return dp[cost.length]
}