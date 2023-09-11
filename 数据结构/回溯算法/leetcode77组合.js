// var combine = function (n, k) {
//     let path = [], res = []

//     const backtracking = (n, k, startIndex) => { /// 1 确定 递归函数参数返回值
//         // 2 确定终止条件
//         if (path.length === k) {
//             res.push(path.slice())
//             return
//         }
//         // 3单层递归逻辑
//         for (var i = startIndex; i <= n; i++) {// 横向遍历
//             path.push(i)
//             backtracking(n, k, i + 1) // 深度遍历
//             path.pop(i)
//         }
//         return res
//     }
//     return backtracking(n, k, 1)
// }

/// 剪树优化
var combine = function (n, k) {
    let res = [], path = []
    const backtracking = (n, k, startIndex) => {
        if (path.length === k) {
            res.push(path.slice())
            return
        }
        for (var i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop(i)
        }
        return res
    }
    return backtracking(n, k, 1)
}