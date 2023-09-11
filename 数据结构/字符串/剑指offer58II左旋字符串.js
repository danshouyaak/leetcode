/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
        //slice()截取字符串
        let left = s.slice(0 , n);
        let right = s.slice(n , s.length);
        let sum = right + left;

        return sum;
};