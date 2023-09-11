var candy = function (ratings) {
    let candys = new Array(ratings.length).fill(1)//先每人分一颗

    for (let i = 1; i < ratings.length; i++) {//先右边与左边的比较
        if (ratings[i] > ratings[i - 1]) {
            candys[i] = candys[i - 1] + 1 // 如果右边的比左边的大，那么在左边糖果的基础上加一颗
        }
    }
    for (i = ratings.length - 2; i >= 0; i--) {// 左边的与右边的相
        if (ratings[i] > ratings[i + 1]) {
            candys[i] = Math.max(candys[i], candys[i + 1] + 1)//比较上一次记录的与右边的糖果加一，取最大值 
        }
    }
    return candys.reduce((a, b) => a + b)
}