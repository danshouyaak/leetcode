var largestSumAfterKNegations = function (nums, k) {
    nums = nums.sort((a, b) => Math.abs(b) - Math.abs(a))// 绝对值最大的排前面
    for (var i = 0; i < nums.length; i++) {
        if (k > 0 && nums[i] < 0) {
            nums[i] = -nums[i]// 第一次贪心，先把最小数取反
        }
    }
    if (k > 0) {
        if (k % 2 === 1) {
            nums[nums.length - 1] = -nums[nums.length - 1]// 第二次贪心，将剩下的次给最小那个数取反
        }
    }
    return nums.reduce((a, b) => a + b)// reduce 计算累计和
}