/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    //dp数组的初始化
    let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
    dp[0][0] = grid[0][0]
    for (let i = 1; i < grid[0].length; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i] // 遍历最上边 是grid数组的累加和
    }
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0] // 遍历最左边 是grid数组没第一个数字的累加和
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
            //递推公式：大概跟 不同路径的差不多 这里就是 把上面dp数字加上当前元素的值 和 左边加上当前数字的值取最小值
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
}