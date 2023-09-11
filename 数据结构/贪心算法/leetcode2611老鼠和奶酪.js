/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
//贪心： 选出reward1 的 前k个最大值
//
var miceAndCheese = function (reward1, reward2, k) {
    let res = reward2.reduce((a, b) => a + b)
    let diffs = []
    for (let i = 0; i < reward2.length; i++) {
        diffs[i] = reward1[i] - reward2[i]
    }
    console.log(res)
    diffs.sort((a, b) => a - b)
    for (let i = 1; i <= k; i++) {
        res += diffs[reward1.length - i]
    }
    console.log(diffs)
    console.log(res)
    return res
};