var constructMaximumBinaryTree = function (nums) {
    const BuildTree = (arr, left, right) => {
        if (left > right) {
            return null
        }
        let maxVal = -1
        let maxIndex = -1

        for (let i = left; i <= right; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i]
                maxIndex = i
            }
        }
        let root = new TreeNode(maxVal) ///  创建根节点
        root.left = BuildTree(arr, left, maxIndex - 1) //左节点
        root.right = BuildTree(arr, maxIndex + 1, right)// 右节点
        return root
    }
    let root = BuildTree(nums, 0, nums.length - 1)
    return root
}