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

//////   在每次for循环中push（）最后一个元素
var rightSideView = function(root) {
        const res = []
        if(!root) return res

        const queue = [];
        queue.push(root)

        while(queue.length > 0){
            let n = queue.length;
            const layerGrop = [];

            for(let i = 0 ; i < n ; i++){
                let target = queue.shift();
                layerGrop.push(target.val)

                if(target.left) queue.push(target.left)
                if(target.right) queue.push(target.right)
            }
            res.push(layerGrop[layerGrop.length - 1])
        }

        return res
};