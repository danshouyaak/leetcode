var combinationSum2 = function (candidates, target) {
    let res = []
    let path = []
    let sum = 0
    let len = candidates.length;
    candidates = candidates.sort((a, b) => a - b)
    let used = new Array(len).fill(false)

    //开始回溯
    const backtracking = (startIndex) => {
        //收集结果
        if (sum === target) {
            res.push(path.slice())
            return
        }
        for (var i = startIndex; i < len && sum < target; i++) {
            const cur = candidates[i]
            if (cur > target - sum || (i > 0 && cur === candidates[i - 1] && !used[i - 1])) continue

            sum += cur
            path.push(cur)
            used[i] = true
            backtracking(i + 1)
            sum -= cur
            path.pop()
            used[i] = false
        }
        return res;
    }
    return backtracking(0)
}