/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/// 暴力
var isSubsequence = function (s, t) {
    let index = 0
    if (s.length === 0 || (s.length === 0 && t.length === 0) || s === t) return true
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[index]) {
            if (index === s.length - 1) return true
            index++
        }
    }
    return false
};
//动态规划
var isSubsequence = function (s, t) {
    
}