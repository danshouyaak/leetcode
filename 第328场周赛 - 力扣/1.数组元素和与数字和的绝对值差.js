/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum = 0
    let numbers = 0
    for (const v of nums) {
        sum += v
        for (const val of v + '') {
            numbers += parseInt(val)
        }
    }
    return Math.abs(sum - numbers)
}