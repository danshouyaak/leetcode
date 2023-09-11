var letterCombinations = function (digits) {
    let k = digits.length
    if (!k) return []
    const map = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];
    const res = [], path = []
    if (k === 1) return map[digits].split('')

    const backtracking = (n, k, a) => {
        if (k === path.length) {
            res.push(path.join(''))
            return
        }
        for (const val of map[n[a]]) {
            path.push(val)
            backtracking(n, k, a + 1)
            path.pop()
        }
        return res
    }
    return backtracking(digits, k, 0)
}