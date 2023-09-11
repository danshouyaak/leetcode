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
///  最大深度的节点的值
/// 层序遍历  找到最深那一层的第一个就是最左值   只用队列
// var findBottomLeftValue = function (root) {
//     if (!root) return null

//     let queue = []
//     queue.push(root)
//     let resNode;

//     while (queue.length) {
//         let length = queue.length /// 记录上一次添加进来的元素个数


//         for (let i = 0; i < length; i++) {
//             let node = queue.shift()
//             if (i === 0) {
//                 // 终止条件    
//                 resNode = node.val
//             }
//             node.left && queue.push(node.left)
//             node.right && queue.push(node.right)
//         }
//     }

//     return resNode
// };
///////////  递归法
var findBottomLeftValue = function(root) {
    if(!root) return null

    let maxPath = 0 , resNode = null; /// 记录节点的值

    const dfsTree = function(node , curPath ){
            // 终止条件  一直递归到叶子节点的底部
            if(node.left === null && node.right === null){
                if(curPath > maxPath){
                    maxPath = curPath
                    resNode = node.val
                }
                return 
            }
            if(node.left){
                curPath++
                dfsTree(node.left , curPath)
                curPath--  // 回溯
            }
            if(node.right){
                curPath++
                dfsTree(node.right , curPath)
                curPath-- // 回溯
            }
    }
    dfsTree(root , 1)
    return resNode

};



