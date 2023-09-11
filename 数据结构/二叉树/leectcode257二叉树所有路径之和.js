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
 * @return {string[]}
 */
 /// 迭代法  前序遍历
 var binaryTreePaths = function(root) {
    if(!root) return[]

    const stack = [root] , paths = [''] , res = []

    while(stack.length){
        const node = stack.pop()
        let path = paths.pop()
        if(!node.left && !node.right){//到叶子节点就结束， 添加路径到结果中
            res.push(path + node.val)
            continue
        } 
        path += node.val + '->'
        if(node.right){//右节结点存在
            stack.push(node.right)
             paths.push(path) // 回溯
        }
        if(node.left){//左节结点存在
            stack.push(node.left)
            paths.push(path) // 回溯
        }
    }
    return res

};