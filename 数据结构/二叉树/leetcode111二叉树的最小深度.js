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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return null;
// 到叶节点返回1
    if(!root.left && !root.right) return 1 /// 不存在左右节点
    // 只有右节点时 递归右节点 
    if(!root.left) return 1 + minDepth(root.right) /// 1代表当前节点
    // 只有左节点时， 递归左节点
    if(!root.right) return 1 + minDepth(root.left)
    return Math.min(minDepth(root.left) , minDepth(root.right)) + 1
};