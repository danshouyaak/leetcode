/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
    if (costs.length === 1) return Math.min(...costs[0])

    const n = costs.length
    let dp = new Array(3).fill(0)
    for (let j = 0; j < 3; j++) {
        dp[j] = costs[0][j]
    }
    for (let i = 1; i < n; i++) {
        const dpNew = new Array(3).fill(0)

        for (let j = 0; j < 3; j++) {
            dpNew[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j]
        }
        //使用dp[(j + 1) % 3] 和 dp[(j + 2)  %2]来控制不会被取到上并列的数组
        dp = dpNew
    }
    return parseInt(_.min(dp))
};