/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while(queue.length > 0){
        let leftNode = queue.shift();
        let rightNode = queue.shift();

        if(!leftNode && !rightNode) {
           continue; 
        }
        if(!leftNode || !rightNode || leftNode.val !== rightNode.val){
            return false
        }

        queue.push(leftNode.left);//左子树的左节点
        queue.push(rightNode.right) //右子树的右节点
        queue.push(leftNode.right)//左子树的右节点
        queue.push(rightNode.left)//右子树的左节点
    }
    return true
    
};