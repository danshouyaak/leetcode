/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b)
    if (sum & 1) return false
    const dp = new Array(sum / 2 + 1).fill(0)//dp数组的遍历
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {//倒叙遍历每个数组只能使用一次  防止多次使用
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === sum / 2) return true
        }
    }
    return false
};