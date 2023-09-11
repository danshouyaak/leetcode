var partition = function (s) {
    let res = []
    let path = []

    const backtracking = (startIndex) => {
        if (startIndex >= s.length) {
            res.push(Array.from(path))
            return
        }
        for (var i = startIndex; i < s.length; i++) {
            if (!isP(s, startIndex, i)) continue
            path.push(s.slice(startIndex, i + 1))
            backtracking(i + 1)
            path.pop()
        }
        return res
    }
    function isP(s, startIndex, i) {
        for (var j = startIndex, k = i; j < k; j++, k--) {
            if (s[j] !== s[k]) return false
        }
        return true
    }
    return backtracking(0)
}