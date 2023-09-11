var deleteNode = function (root, key) {
    if (root === null) return null

    if (root.val > key) {// 左边
        root.left = deleteNode(root.left, key)
        return root
    } else if (root.val < key) { // 右边
        root.right = deleteNode(root.right, key)
        return root
    } else {
        //情况一：该节点是叶子节点 ，左为空，右为空
        if (root.left === null && root.right === null) {
            return null
        }
        // 情况二：左节点不为空 ， 右为空
        if (root.left !== null && root.right === null) {
            return root.left
        } else if (root.left == null && root.right !== null) {
            return root.right
        } else {
            /// 情况三：左右节点不为空
            let rightNode = root.right
            let minNode = getMinNode(rightNode); // 搜索当前节点的右子节点的最左边的节点
            // 当前节点的值更新为minNode.val
            root.val = minNode.val

            root.right = deleteNode(root.right, minNode.val)
            return root

        }
    }
}
function getMinNode(root) {
    while (root.left) {
        root = root.left
    }
    return root
}
// var deleteNode = function (root, key) {

//     // (1) 先判断传入进来的root是否为空
//     if (!root) return null
//     if (root.val > key) {
//         root.left = deleteNode(root.left, key)
//         return root
//     } else if (root.val < key) {
//         root.right = deleteNode(root.right, key)
//         return root
//     } else { // /找到要删除的节点后进行多种情况分析
//         // 情况一： 该节点是叶子节点
//         if (root.left === null && root.right === null) {
//             return null
//         }
//         // 情况二：该左节点不为空 ， 右节点为空
//         if (root.left !== null && root.right === null) {
//             return root.left
//         } else if(root.left === null && root.right !== null){//该左节点为空 ， 右节点 不为空
//             return root.right
//         }
//         //情况三：左右节点都不为空
//         const rightNode = root.right // 把root的右节点记录下来
//         const minNode = getMinNode(rightNode)
//         // 当前节点的值更新为minNode.val
//         root.val = minNode.val

//         root.right = deleteNode(root.right, minNode.val)
//         return root
//     }

// };
// function getMinNode(root) {
//     while (root.left) {
//         root = root.left
//     }
//     return root
// }