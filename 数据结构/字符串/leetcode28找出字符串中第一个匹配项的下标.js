/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

///1.直接调用includes()
var strStr = function(haystack, needle) {
return haystack.includes(needle)? haystack.indexOf(needle) : -1;
};