/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/// 递归法
// var lowestCommonAncestor = function (root, p, q) {
//     const traversal = (cur, p, q) => {
//         if (!cur) return null

//         // 左节点的处理
//         if (cur.val > p.val && cur.val > q.val) {
//             let left = traversal(cur.left, p, q)
//             if (left !== null) return left
//         }

//         // 右节点的处理
//         if (cur.val < p.val && cur.val < q.val) {
//             let right = traversal(cur.right, p, q)
//             if (right.val !== null) return right
//         }
//         return cur
//     }
//     return traversal(root, p, q)
// };

/// 迭代法
var lowestCommonAncestor = function (root, p, q) {
    const traversal = (cur, p, q) => {
        while (cur) {
            if (cur.val > p.val && cur.val > q.val) {// / 左节点的处理
                cur = cur.left
            } else if (cur.val < p.val && cur.val < q.val) {// / 右节点的处理
                cur = cur.right
            } else { // 找到之后返回节点
                return cur
            }
        }
        //如果没进入while循环说明传入进来的节点为空节点直接return null
        return null
    }
    return traversal(root, p, q)
}