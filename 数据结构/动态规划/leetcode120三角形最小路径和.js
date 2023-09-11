/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 从最底层开始遍历
var minimumTotal = function (triangle) {
    let dp = []
    let dpth = triangle.length - 1
    dp[dpth] = triangle[dpth]

    for (let i = dpth - 1; i >= 0; i--) {
        dp[i] = []
        for (let j = 0; j < triangle[i].length; j++) {
            //当前节点的最小路径等于min（左小节点的最小路径，右下节点的最小路径）+当前节点的值
            dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
        }
    }
    return dp[0][0] // 返回第0层第0个元素的最小路径
}