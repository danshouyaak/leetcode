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
 * @param {number} targetSum
 * @return {boolean}
 */

 /// 迭代法
 var hasPathSum = function(root, targetSum) {
    if(!root) return false

    let nodeArr = [root]
    let valArr = [0];

    while(nodeArr.length){
        let curNode = nodeArr.shift();
        let curVal = valArr.shift();

        curVal += curNode.val;
        // 为了叶子节点，且和等于目标数，返回true

        if(curNode.left === null && curNode.right == null && curVal === targetSum){ /// 终止条件
            return true//// 当计数之和等于目标值时并且左右节点为空
        }

        if(curNode.left){ //// 左节点
            nodeArr.push(curNode.left)
            valArr.push(curVal) /// 看左节点是否存在 添加到nodeArr里
        }
        if(curNode.right){ /// 右节点
            nodeArr.push(curNode.right)
            valArr.push(curVal)/// 看右节点是否存在 添加到nodeArr里
        }
    }
    return false

};