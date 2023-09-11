/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map()
    for (const num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    let times = new Set() //使用set去重
    for (const [key, value] of map) {
        times.add(value)
    }
    return times.size === map.size
};