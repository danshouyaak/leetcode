var findSubsequences = function (nums) {
    let res = []
    let path = []

    const backtracking = (startIndex) => {
        if (path.length > 1) { /// 收集的数组大于1就push
            res.push(path.slice())// 没有return 是因为还要继续收集，不是遍历到叶子节点
        }
        let uset = []
        for (var i = startIndex; i < nums.length; i++) {
            if ((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) continue
            // 数组不能为空 并且 他的后一个数 不能比前一个大             该数字被使用过
            uset[nums[i] + 100] = true
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
        return res
    }
    return backtracking(0)
}