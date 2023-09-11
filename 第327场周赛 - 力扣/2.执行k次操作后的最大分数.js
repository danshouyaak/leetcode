/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/// 错误  超时
var maxKelements = function (nums, k) {
    let maxVal = 0
    let flag = 0
    for (let i = 1; i <= k; i++) {
        flag = maxNumbers(nums)
        maxVal += flag
    }
    return maxVal
};
function maxNumbers(nums) {
    let max = 0
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            index = i
            max = nums[i]
        }
    }
    nums[index] = Math.ceil(max / 3)
    return max
}