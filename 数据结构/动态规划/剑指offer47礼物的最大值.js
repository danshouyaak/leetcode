/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    let m = grid.length
    let n = grid[m - 1].length
    //初始化
    //行
    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    //列
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++) {
            grid[i][j] = Math.max(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j])
        }
    }
    console.log(grid)
    return grid[m - 1][n - 1]
};