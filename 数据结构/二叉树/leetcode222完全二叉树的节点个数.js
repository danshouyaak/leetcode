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
 //利用完全二叉树的特点
 var countNodes = function(root) {
    if(!root) return 0;

    let left = root.left;
    let right = root.right;
   let leftDepth = 0, rightDepth = 0; // 定义左右深度

   while(left){
       left = left.left;
       leftDepth += 1;
   }
   while(right){
       right = right.right;
       rightDepth += 1;
   }

   if(leftDepth === rightDepth){
       return Math.pow(2,leftDepth + 1) - 1;
   }
    return countNodes(root.left) + countNodes(root.right) + 1;
};