var combinationSum3 = function (k, n) {
    let res = [], path = [], sum = 0 // res二维数组 path 一维数组
    const backtracking = (path, startIndex) => {
        //剪枝操作
        if (sum > n) return

        if (path.length === k) {
            if (sum === n) {
                res.push(path.slice())
                return
            }
        }

        for (var i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i)
            sum += i
            backtracking(path, i + 1)
            sum -= i
            path.pop()
        }
        return res
    }
    return backtracking(path, 1)
}