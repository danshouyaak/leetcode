/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = []

    for (let i = 0; i <= rowIndex; i++) {
        const dp = new Array(i + 1).fill(1)
        for (let j = 1; j < dp.length - 1; j++) {
            dp[j] = res[i - 1][j - 1] + res[i - 1][j]
        }
        res.push(dp)
    }
    return res[rowIndex]
}