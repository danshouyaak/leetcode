/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = []

    for (let i = 0; i < numRows; i++) {
        const dp = new Array(i + 1).fill(1)

        for (let j = 1; j < dp.length - 1; j++) {
            dp[j] = res[i - 1][j - 1] + res[i - 1][j]
        }
        res.push(dp)
    }
    return res
}