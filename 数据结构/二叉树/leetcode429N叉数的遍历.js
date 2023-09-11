/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [];
    if (!root) return res

    const queue = [];
    queue.push(root)

    while (queue.length > 0) {
        const layerGroup = []
        let n = queue.length;

        for (let i = 0; i < n; i++) {
            let target = queue.shift();
            layerGroup.push(target.val)

            for (let chaild of target.children) {
                queue.push(chaild)
            }
        }
        res.push(layerGroup)
    }
    return res
};