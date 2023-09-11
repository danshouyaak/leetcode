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
//树形dp
var rob = function (root) {
    //后序遍历  通过递归函数的返回值来进行下一步计算
    // 使用一个长度为2的dp数组来记录偷（1）与不偷（0）

    const postOrde = node => {
        //递归三部曲
        if (!node) return [0, 0]  //当遍历到当前节点为空的时候 偷与不偷的最大值都为0

        //递归遍历左子节点
        const left = postOrde(node.left)
        //递归遍历右子节点
        const right = postOrde(node.right)

        //节点的处理
        //当前节点不偷 左右节点可以偷 取最大值
        const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

        //当前节点偷 当前节点的值加上左右节点不偷的值
        const Do = node.val + left[0] + right[0]

        return [DoNot, Do]
    }
    let res = postOrde(root)

    return Math.max(res[0], res[1])
};