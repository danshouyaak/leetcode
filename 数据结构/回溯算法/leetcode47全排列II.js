var permuteUnique = function (nums) {
    if (nums.length === 1) return [[nums[0]]]
    let res = []
    let path = []
    nums = nums.sort((a, b) => a - b) /// 先排序一下，比较容易去重
    let uset = new Array(nums.length).fill(false)
    const backtracking = (nums, uset) => {
        if (path.length === nums.length) {
            res.push(Array.from(path))
            return
        }
        for (var i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && uset[i - 1] === false) continue
            /// 树层去重
            if (uset[i] === true) continue// 树枝去重 ， 用过的直接跳过
            path.push(nums[i])
            uset[i] = true
            backtracking(nums, uset)
            uset[i] = false
            path.pop()
        }
        return res
    }
    return backtracking(nums, uset)
}