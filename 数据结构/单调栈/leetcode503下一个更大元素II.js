/**
 * @param {number[]} nums
 * @return {number[]}
 */
//用取模来模拟环形数组
var nextGreaterElements = function (nums) {
    let res = Array(nums.length).fill(-1)
    let stack = []
    stack.push(0)

    for (let i = 1; i < nums.length * 2; i++) {
        const index = i % nums.length
        while (stack.length && nums[index] > nums[stack[stack.length - 1]]) {
            res[stack[stack.length - 1]] = nums[index]
            stack.pop()
        }
        stack.push(index)
    }
    console.log(res)
    return res
};