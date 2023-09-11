/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    //思路：1.只考虑首元素 不考虑为元素
    //     2.只考虑尾元素 不考虑首元素
    //    取他们两个的最大值

    const n = nums.length
    if (n === 0) return 0
    if (n === 1) return nums[0]
    const res1 = robRange(nums, 0, n - 2)
    const res2 = robRange(nums, 1, n - 1)

    return Math.max(res1, res2)
};
const robRange = (nums, start, end) => {
    if (end === start) return nums[start]
    let dp = new Array(nums.length).fill(0)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[end]
}

