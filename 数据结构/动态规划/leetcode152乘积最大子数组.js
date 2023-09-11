/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    //dp[i][0] 0到i的最小乘积
    //dp[i][1] 0到i的最大乘积
    let dp = Array(nums.length).fill(0).map(() => Array(2).fill(0))
    dp[0][0] = nums[0]
    dp[0][1] = nums[0]
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i][0] = Math.min(dp[i - 1][0] * nums[i], nums[i], dp[i - 1][1] * nums[i])
        dp[i][1] = Math.max(dp[i - 1][0] * nums[i], nums[i], dp[i - 1][1] * nums[i])
        res = Math.max(dp[i][0], dp[i][1], res)
    }
    console.log(Math.max(...dp))
    return res
};