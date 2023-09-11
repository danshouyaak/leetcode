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
 * @return {number[]}
 */
var largestValues = function (root) {
    const res = []
    if (!root) return res

    const queue = []
    queue.push(root)


    while (queue.length > 0) {
        let n = queue.length;
        // const layerGroup = [];
        let maxval = -Number.MAX_VALUE

        while (n-- > 0) {
            let target = queue.shift()
            maxval = Math.max(maxval, target.val)

            if (target.left) queue.push(target.left)
            if (target.right) queue.push(target.right)
        }
        res.push(maxval)
    }
    return res
};