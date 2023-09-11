var partitionLabels = function (s) {
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i // 不断更新每个字母的最大下标
    }
    let left = 0
    let right = 0
    let res = []

    for (let i = 0; i < s.length; i++) {
        right = Math.max(hash[s[i]], right)
        if (right === i) {
            res.push(right - left + 1)
            left = i + 1
        }
    }
    return res
}