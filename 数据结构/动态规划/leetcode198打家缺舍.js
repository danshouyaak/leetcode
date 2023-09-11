/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[nums.length]
}
//nums[2,7,9,3,1]
//dp[2,7,11,11,12]