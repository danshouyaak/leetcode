/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2)return intervals;

    intervals.sort(function  (a , b) { // 给数组排序
        return a[0] - b[0]
    })

    let cur = intervals[0] ;
    let res = []

    for(let interval of intervals){
        if(cur[1] >= interval[0]){
            cur[1] = Math.max(cur[1] , interval[1])
        }else{
            res.push(cur)
            cur = interval
        }
    }
    if(cur.length !== 0){
        res.push(cur)
    }
    return res
};