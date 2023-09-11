var findMaxForm = function (strs, m, n) {
    //1.dp数组的确定 以及下标的意义
    //dp[i][j]：最多有i个0 和 j 个1的str 的最大子集的大小为dp[i][j]
    //zeroNum 表示有多少个零oneNum表示有多少个1
    //2.确定递推公式：dp[i][j] = Math.max(dp[i][j] , dp[i - zeroNum][j - oneNum]  + 1)
    //3.dp数组的初始化
    //4.确定遍历顺序

    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
    let numZero, numOne

    for (const str of strs) { // 遍历字符串
        numOne = 0
        numZero = 0

        for (const c of str) {// 获取过来的字符的每一个字符
            if (c === '0') {
                numZero++
            } else {
                numOne++
            }
        }
        for (let i = m; i >= numZero; i--) {
            for (let j = n; j >= numOne; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - numZero][j - numOne] + 1)
            }
        }
    }
    return dp[m][n]
}