/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n == 0) return 1
    if (n === 1) return 1
    if (n === 2) return 2

    let dp = [1, 1, 2]

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
};