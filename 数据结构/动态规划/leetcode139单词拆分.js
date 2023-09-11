/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    //求的是排列数 先遍历背包再遍历物品
    let dp = Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (i >= wordDict[j].length) {
                //切割字符串判断是否相等 并且 dp[i]是否为true
                if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
};