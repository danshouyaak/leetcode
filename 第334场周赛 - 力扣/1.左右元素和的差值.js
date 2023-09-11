var leftRigthDifference = function (nums) {
    let res = []
    let rightSum = nums.reduce((a, b) => a + b)
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        res.push(Math.abs(leftSum - rightSum))
        leftSum += nums[i]
    }
    return res
}
