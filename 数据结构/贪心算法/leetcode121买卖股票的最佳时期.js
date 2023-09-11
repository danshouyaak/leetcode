/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0
    let minVal = prices[0]
    let maxVal = 0

    for (let i = 1; i < prices.length; i++) {
        if (minVal > prices[i]) {
            minVal = prices[i]
        } else if ((prices[i] - minVal) > maxVal) {
            maxVal = prices[i] - minVal
        }
    }
    return maxVal
}