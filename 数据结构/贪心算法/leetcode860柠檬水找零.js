var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        }
        if (bills[i] === 10) { // 当收到是十块钱的时候
            if (five === 0) return false // 如果没有5块钱可以找零，直接返回false
            five--
            ten++
        }
        if (bills[i] === 20) {// 当收到是20的时候只有两种情况
            if (five > 0 && ten > 0) {//贪心1. 五块钱大于0 ，十块钱大于0
                five--
                ten--
            } else if (five >= 3) {
                five -= 3 // 全部用五块钱
            } else {
                return false
            }
        }
    }
    return true
}