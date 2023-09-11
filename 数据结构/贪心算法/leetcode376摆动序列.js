var wiggleMaxLength = function (nums) {
    if (nums.length === 1) return 1
    if (nums.length === 2) {
        if (nums[0] !== nums[1]) return 2
    }
    let curDiff = 0 /// 
    let preDiff = 0
    let res = 1 // 默认最右边的摆动1

    for (let i = 0; i < nums.length; i++) {
        curDiff = nums[i + 1] - nums[i]
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {// 判断是否有摆动
            // 如果有就记录下来
            res++
            preDiff = curDiff // preDiff 记录curDiff的值 ，， curDiff继续向前判断
        }
    }
    return res
}