/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//滑动窗口
var minSubArrayLen = function (target, nums) {
    if (nums[nums.length - 1] >= target) return 1

    if (nums.reduce((a, b) => a + b) < target) return 0
    let res = Infinity
    let left = right = 0
    let sum = 0

    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            res = Math.min(res, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return res === Infinity ? 0 : res
};