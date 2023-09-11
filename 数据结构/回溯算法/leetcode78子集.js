var subsets = function (nums) {
    if (nums.length === 1) return [[], [nums[0]]]
    let res = []
    let path = []

    const backtracking = (startIndex) => {
        res.push(path.slice)
        for (var i = startIndex; i < nums.length; i++) {
  //          if (nums[i] === nums[i + 1]) continue
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
        return res
    }
    return backtracking(0)
}