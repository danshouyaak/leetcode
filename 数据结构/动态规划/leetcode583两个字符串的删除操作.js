/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = Array(word2.length + 1).fill(0).map(() => Array(word1.length + 1).fill(0))
    for (let i = 1; i <= word2.length; i++) {
        for (let j = 1; j <= word1.length; j++) {
            if (word2[i - 1] === word1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return word1.length + word2.length - dp[word2.length][word1.length] * 2;
}