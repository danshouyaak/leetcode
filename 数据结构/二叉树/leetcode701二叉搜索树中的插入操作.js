/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 递归法
// var insertIntoBST = function (root, val) {
//     const setInOrder = (cur, val) => {
//         if (!cur) return ndoe = new TreeNode(val) // 找到之后建立新的节点 插入

//         // 左节点的遍历
//         if (cur.val > val) {
//             cur.left = setInOrder(cur.left, val)
//         }

//         // 右节点的遍历
//         if (cur.val < val) {
//             cur.right = setInOrder(cur.right, val)
//         }
//         return cur
//     }
//     return setInOrder(root, val)
// };

// 迭代法
var insertIntoBST = function (root, val) {
        
}