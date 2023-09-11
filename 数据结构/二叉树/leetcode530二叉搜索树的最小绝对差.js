// 递归法 中序遍历
var getMinimumDifference = function (root) {
    let per = null
    let res = Infinity

    const inroder = (node) => {
        if (!node) return

        /// 遍历左边
        inroder(node.left)

        /////// 中的处理
        if (per) {
            res = Math.min(res, node.val - per.val)
        }
        ///更新指针
        per = node

        /////// 遍历右边
        inroder(node.right)
        //最后返回记录最小值的res
        return res
    }
    return inroder(root)
}
// 迭代法 中序遍历 使用栈来完成
var getMinimumDifference = function (root) {
    const stack = []
    let per = null
    let cur = root
    let res = Infinity

    while (cur || stack.length) {
        if (cur) { // 当cur为null时说明到了最左侧
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            if (per) res = Math.min(res, cur.val - per.val)
            per = cur
            cur = cur.right
        }
    }
    return res;
}