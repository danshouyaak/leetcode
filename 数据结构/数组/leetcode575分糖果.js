/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {

    let len = candyType.length / 2
    let typeCnt = [...new Set(candyType)].length

    if (len >= typeCnt) return typeCnt
    if (len < typeCnt) return len

};