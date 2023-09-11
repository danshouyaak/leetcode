/// 无脑解法
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    let map = new Map()
    for (const v of nums1) {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1)
        } else {
            map.set(v, 1)
        }
    }
    for (let a of nums2) {
        if (map.has(a)) {
            map.set(a, map.get(a) + 1)
        } else {
            map.set(a, 1)
        }
        if (map.get(a) >= 2) {
            return a
        }
    }

    let number1 = 9
    let number2 = 9

    for (var i = 0; i < nums1.length; i++) {
        let a = nums1[i]
        number1 = a <= number1 ? a : number1
    }
    for (var i = 0; i < nums2.length; i++) {
        let b = nums2[i]
        number2 = b <= number2 ? b : number2
    }
    if (number1 > number2) {
        res = number2 + '' + number1
    } else {
        res = number1 + '' + number2
    }

    return res
};