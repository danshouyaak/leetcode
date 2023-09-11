/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i * i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
            dp[j] = Math.min(dp[j - i * i] + 1, dp[j])
        }
    }
    return dp[n]
}