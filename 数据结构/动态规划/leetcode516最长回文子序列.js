/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    //dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]。
    let dp = Array(s.length).fill(0).map(() => Array(s.length).fill(0))
    //初始化 每个字母相等时 长度为1
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1
    }
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    console.log(dp)
    return dp[0][s.length - 1]
};