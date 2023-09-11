var canJump = function (nums) {
    if (nums.length === 1) return true
    let cover = 0
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(i + nums[i], cover)// 更新覆盖位置
        if (cover >= nums.length - 1) return true
    }
    return false
}