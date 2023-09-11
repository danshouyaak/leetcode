var subsetsWithDup = function (nums) {
    if (nums.length === 1) return [[], [nums[0]]]
    nums = nums.sort((a, b) => a - b)
    let res = []
    let path = []

    const backtracking = (startIndex, nums) => {
        res.push(path.slice())
        if (startIndex > nums.length - 1) return

        for (var i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtracking(i + 1, nums)
            path.pop()
        }
        return res
    }
    return backtracking(0, nums)
}