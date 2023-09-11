var restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) return []
    let res = []
    let path = []
    const backtracking = (startIndex) => {
        if (path.length === 4 && startIndex === s.length) { /// 如果path收集的结果为4位数，并且已经遍历到了尾部
            res.push(path.join('.'))
            return
        }
        for (var i = startIndex; i < s.length; i++) {
            const str = s.slice(startIndex, i + 1)// 切割
            if (str.length > 3 || +str > 255) break; //切割位数大于4，并且数值大于255
            if (str.length > 1 && str[0] === '0') break
            path.push(str)
            backtracking(i + 1)
            path.pop()
        }
        return res
    }
    return backtracking(0)
}