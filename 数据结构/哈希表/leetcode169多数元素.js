/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length === 1) return [nums];

    let map = new Map();
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
            if (map.get(num) > nums.length / 2) {
                return num;
            }
        }
    }
};