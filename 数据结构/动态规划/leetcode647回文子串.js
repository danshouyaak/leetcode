/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    //dp[i][j] 在i到j的范围有回文子串dp[i][j]个
    let dp = Array(s.length).fill(false).map(() => Array(s.length).fill(false))
    let res = 0
    for (let i = s.length; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            //两种情况  1：当长度小于等于2时 一定为回文子串 即 j - i 《=1
            //2 向两边扩散
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    res++
                    dp[i][j] = true
                } else if (dp[i + 1][j - 1]) {
                    dp[i][j] = true
                    res++
                }
            }
        }
    }
    return res
};