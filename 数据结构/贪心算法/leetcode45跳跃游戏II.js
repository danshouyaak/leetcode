var jump = function (nums) {
    if (nums.length === 1) return 0
    let next = 0
    let res = 0
    let cover = 0

    for (let i = 0; i < nums.length; i++) {
        next = Math.max(i + nums[i], next) // 记录最大的覆盖范围
        if (i === cover) { // 到头了
            if (i !== nums.length - 1) {
                cover = next /// 更新覆盖范围
                res++
            }
            if (cover >= nums.length - 1) return res
        }
    }
}