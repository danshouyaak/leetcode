var permute = function (nums) {
    if (nums.length === 1) return [[nums[0]]]
    let res = []
    let path = []
    let uset = new Array(nums.length).fill(false)

    const backtracking = (nums, uset) => {
        if (path.length === nums.length) {
            res.push(Array.from(path)) // 
            return
        }
        for (var i = 0; i < nums.length; i++) {
            if (uset[i] === true) continue
            uset[i] = true
            path.push(nums[i])
            backtracking(nums, uset)
            uset[i] = false
            path.pop()
        }
        return res
    }
    return backtracking(nums, uset)
}