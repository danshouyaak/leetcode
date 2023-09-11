/**
 * @param {number} n
 * @return {number}
 */
// 暴力枚举
var sumOfMultiples = function (n) {
    const s = a => {
        let c = n / a >> 0, last = c * a
        return (a + last) * c / 2
    }

    return s( 3) + s( 5) + s( 7) - s( 15) - s( 21) - s( 35) + s( 105)
};