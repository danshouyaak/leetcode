/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let res = Array(nums1.length).fill(-1)

    if (nums1.length < 1) return []
    const stack = []
    let map = new Map()

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            const index = stack.pop()
            map.set(nums2[index], nums2[i])
        }
        stack.push(i)
    }
    for (let j = 0; j < nums1.length; j++) {
        res[j] = map.get(nums1[j]) || -1
    }
    return res
    console.log(res)
};