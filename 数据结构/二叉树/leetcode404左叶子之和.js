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
 /// 后序遍历
 var sumOfLeftLeaves = function(root) {
    if(!root) return 0;

    const queue = []
    queue.push(root)
    let sum = 0;

    while(queue.length){
        let node = queue.shift()

        if(node.left !== null && node.left.left == null && node.left.right == null){
            sum += node.left.val
        }

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return sum
};