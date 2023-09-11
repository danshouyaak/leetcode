/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    if (nums.length < 3) return 0
    let dp = Array(nums.length).fill(0)
    for (let i = 2; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1
        }
    };
    console.log(dp)
    return dp.reduce((a, b) => a + b)
}