var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 0) return 0
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let end = intervals[intervals.length - 1][0]
    let count = 1  // 用来记录不重叠的数量
    for (let i = intervals.length - 2; i >= 0; i--) {
        if (intervals[i][1] <= end) {
            count++
            end = intervals[i][0]
        }
    }
    return intervals.length - count
}