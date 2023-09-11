/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    // 用两个维度
    //1.先按照身高排序
    //2.然后按k值进行插入操作
    people.sort((a, b) => {// 先跟据身高排序，如果身高相等，就按k值较小的排前面
        if (b[0] !== a[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    let queue = []
    for (let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i])//people[i][1]获取对应的k值为queue的索引，把people[i]的值按照索引大小排序
    }
    return queue
}