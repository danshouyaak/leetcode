/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxVal = nums[0]
    for(let i = 1 ; i < nums.length;i++){
        nums[i] = Math.max(nums[i],nums[i] + nums[i - 1])
        if(nums[i] > maxVal) maxVal = nums[i]
    }
    return maxVal
};