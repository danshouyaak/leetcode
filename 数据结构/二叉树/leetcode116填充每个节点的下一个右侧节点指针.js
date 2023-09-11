/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;

    const queue = []
    queue.push(root)

    while(queue.length > 0){
        let n = queue.length

        for(let i = 0 ; i < n ; i++){
            let target = queue.shift()

            if( i < n - 1){
                target.next = queue[0]
            }

            if(target.left) queue.push(target.left)
            if(target.right) queue.push(target.right)
        } 
    }
        return root
};