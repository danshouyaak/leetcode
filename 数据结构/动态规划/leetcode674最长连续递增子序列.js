/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let dp = Array(nums.length).fill(1)
    let res = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
        if (res < dp[i]) {
            res = dp[i]
        }
    }
    return res
};