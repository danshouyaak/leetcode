var sortedArrayToBST = function (nums) {
    const buildTree = (Arr, left, right) => {
        if (left > right) return null

        let mid = Math.floor(left + (right - left) / 2)
        let root = new TreeNode(Arr[mid])
        root.left = buildTree(Arr, left, mid - 1)
        root.right = buildTree(Arr, mid + 1, right)

        return root
    }
    return buildTree(nums, 0, nums.length - 1)
}