/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let res = 0
    let maxCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            res++
        } else {
            maxCount = Math.max(maxCount, res)
            res = 0
        }
    }
    return res > maxCount ? res : maxCount
};