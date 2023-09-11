/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
// 无脑暴力
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    let res = 0
    let resNum = []
    for (var i = 1; i <= numOnes; i++) {
        resNum.push(1)
    }
    for (var i = 1; i <= numZeros; i++) {
        resNum.push(0)
    }
    for (var i = 1; i <= numNegOnes; i++) {
        resNum.push(-1)
    }
    resNum = resNum.sort((a, b) => b - a)
    for (var i = 0; i < k; i++) {
        res += resNum[i]
    }
    return res
};