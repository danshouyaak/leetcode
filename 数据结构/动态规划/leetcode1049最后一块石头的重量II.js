/**
 * @param {number[]} stones
 * @return {number}
 */
// 重点：把石头尽可能分为两堆体积相等
var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((a, b) => a + b)

    let dplen = Math.floor(sum / 2)
    let dp = new Array(dplen + 1).fill(0)

    for (let i = 0; i < stones.length; i++) {
        for (let j = dplen; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])

        }
    }
    return sum - dp[dplen] - dp[dplen]
};