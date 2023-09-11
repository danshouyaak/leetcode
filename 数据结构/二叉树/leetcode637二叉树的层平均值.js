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
var averageOfLevels = function(root) {
    const res = []
    if(!root) return res;

    const queue = [];
    queue.push(root);

    while(queue.length > 0){
        const layerGroup = [];
        let n = queue.length;

        for(let i = 0 ; i < n ; i++){
            let target = queue.shift()
            layerGroup.push(target.val)

            if(target.left) queue.push(target.left)
            if(target.right) queue.push(target.right)
        }
         let sum = 0
        for(let j = 0 ; j < n ; j++){
            sum += layerGroup[j]
        }
        let avg = sum / n

        res.push(avg)
    }
    return res
};