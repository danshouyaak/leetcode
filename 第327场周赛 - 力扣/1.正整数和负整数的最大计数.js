/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let pos = 0
    let neg = 0
    for (const val of nums) {
        if (val < 0) {
            neg++
        }
        if (val > 0) {
            pos++
        }
    }
    return Math.max(pos, neg)
}