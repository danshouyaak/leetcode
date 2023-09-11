/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array(m).fill().map(item => Array(n))//1.dp数组确定
    
    for (let i = 0; i < m; i++) {//2.dp数组的初始化
        dp[i][0] = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    //3.dp数组的遍历 左到右  上到下
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};