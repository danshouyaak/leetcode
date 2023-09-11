var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b) // 胃口
    s = s.sort((a, b) => a - b) // 饼干

    let index = s.length - 1
    let res = 0
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            res++
            index--
        }
    }
    return res
}