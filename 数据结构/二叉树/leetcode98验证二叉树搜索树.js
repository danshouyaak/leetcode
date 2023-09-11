/// 中序遍历
var isValidBST = function (root) {
    let pre = null

    const inOrder = (root) => {
        if (!root) return true

        let left = inOrder(root.left)

        if (pre && pre.val >= root.val) {
            return false
        }
        pre = root

        let right = inOrder(root.right)

        return left && right
    }

    return inOrder(root)
}