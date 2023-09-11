/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    //1dp数组的确定
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    ///数组的遍历 , 从左到右 上到下
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                //不是障碍
                if (i === 0) {
                    //取左边的值
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1 //obstacleGrid[i][j]先看存不存在，不存在 1
                } else if (j === 0) {
                    //取上边的值  ?. 和&& 的意思差不多
                    obstacleGrid[i][j] = obstacleGrid[i - 1]?.[j] ?? 1
                } else {
                    // 取左边的和上边的值
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
                }
            } else {
                //如果是障碍，则路径为0
                obstacleGrid[i][j] = 0
            }
        }
    }
    return obstacleGrid[m - 1][n - 1]
};
