/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let res = []
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    for (const v of nums) {
        if (map.get(v) === 1) {
            res.push(v)
        }
    }
    return res
};