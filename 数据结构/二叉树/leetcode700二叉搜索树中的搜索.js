///  递归法
var searchBST = function (root, val) {
    if (!root || root.val === val) return root

    let res = null // 申请一个变量来记录返回的根
    if (val > root.val) res = searchBST(root.right, val)
    if (val < root.val) res = searchBST(root.left, val)

    return res;
}

// 迭代法
var searchBST = function (root, val) {
    while (root) {
        if (val > root.val) {
            root = root.right
        } else if (val < root.val) {
            root = root.left
        } else {
            return root
        }
    }
    return null /// 没有进入循环 或者 进入循环没有找到值
}