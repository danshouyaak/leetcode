var diagonalPrime = function (nums) {
    let max = 0
    const n = nums.length
    for (var i = 0; i < n; i++) {
        if (isNumber(nums[i][i])) {
            max = Math.max(max, nums[i][i])
        }
        if (isNumber(nums[i][n - i - 1])) {
            max = Math.max(max, nums[i][n - i - 1])
        }
    }
    return max
};
function isNumber(n) {
    if (n <= 1) return false
    let max = Math.floor(Math.sqrt(n))
    for (var i = 2; i <= max; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}