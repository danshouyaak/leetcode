/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    //顺序不同的序列被视作不同的组合
    //强调排列 先遍历背包 再遍历物品
    let dp = Array(target + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i <= target; i++) {//遍历背包
        for (let j = 0; j < nums.length; j++) {//遍历物品
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
};