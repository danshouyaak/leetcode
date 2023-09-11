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
 * @return {boolean}
 */
///递归法
var isBalanced = function(root) {
        
    const getDepth = (node) =>{
        if(node === null) return 0;

        let leftDepth = getDepth(node.left)
        if(leftDepth === -1) return -1

        let rightDepth = getDepth(node.right);
        if(rightDepth === -1)return -1

        if(Math.abs(leftDepth - rightDepth ) > 1){
            return -1
        }else{
            return 1 + Math.max(leftDepth , rightDepth);
        }

    }
        return !(getDepth(root) === -1)
};


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
 * @return {boolean}
 */
// var isBalanced = function(root) {
//     const getDepth = function(node){ // 1.确定递归函数参数终止以及返回值
//     if(node === null) return 0; // 首先判断根节点

//     let leftDepth = getDepth(node.left)   //  去判断左子树的节点
//     if(leftDepth === -1 )return -1

//     let rightDepth = getDepth(node.right)  // 去判断右子树的节点
//     if(rightDepth === -1)return -1

//     if(Math.abs(leftDepth - rightDepth) > 1){
//         return -1
//     }else{
//         return 1 + Math.max(leftDepth , rightDepth)
//     }

//  }
//     return !(getDepth(root) === -1)
// };