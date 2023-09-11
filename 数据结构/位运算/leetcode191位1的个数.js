/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/// 位运算
var hammingWeight = function (n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            res++
        }
    }
    return res
};