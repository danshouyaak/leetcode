/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[\W_]/g, '');//把字符串全部转为小写 ， 把逗号转为空
    if (s.length < 2) return true

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
};