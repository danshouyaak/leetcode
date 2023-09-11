var findMinArrowShots = function (points) {
    if (points.length === 0) return 0
    // 先给数组排序方便计算右边界的公共部分
    points = points.sort((a, b) => a[0] - b[0])

    let res = 1// 箭的初始长度为1 ， 不是0个气球的情况下最少要一发
    for (let i = 1; i < points.length; i++) {
        // 更新最小边界值
        if (points[i][0] > points[i - 1][1]) {
            res++
        } else {
            points[i][1] = Math.min(points[i][1], points[i - 1][1])
        }
    }
    return res
};