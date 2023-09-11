var groupAnagrams = function (strs) {
    if (strs.length === 0) return []
    let map = new Map()
    for (const str of strs) {
        let chartacher = new Array(26).fill(1)
        for (let i = 0; i < str.length; i++) {
            let acsii = str.charCodeAt(i) - 97 // 获取它的ascii 码表
            chartacher[acsii]++
        }
        const key = chartacher.join('') // 数组->字符串
        if (map.has(key)) {
            map.set(key, [...map.get(key), str])
        } else {
            map.set(key, [str])
        }
    }
    let res = []
    for (const val of map) {
        res.push(val[1])
    }
    return res.reverse()
}