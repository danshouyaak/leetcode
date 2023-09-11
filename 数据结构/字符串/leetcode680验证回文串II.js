/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    var isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }

    let right = s.length - 1;
    let left = 0
    while (left < right) {
        if (s[left] !== s[right]) {
            var res = isPalindrome(left + 1, right) || isPalindrome(left, right - 1)
            return res
        }
        left++
        right--
    }

    return true
};