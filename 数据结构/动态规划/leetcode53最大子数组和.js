/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let res = -Infinity
//     let count = 0

//     for(var i = 0 ; i < nums.length ;i++){
//         count += nums[i]
//         if(count > res){
//             res = count
//         }
//         if(count < 0){
//             count = 0
//         }
//     }
//     return res
// };
// var maxSubArray = function (nums) {// 贪心思想
//     let res = -Infinity
//     let count = 0
//     for (var i = 0; i < nums.length; i++) {
//         count += nums[i]
//         if (count > res) {
//             res = count
//         }
//         if (count < 0) {
//             count = 0
//         }
//     }
//     return res
// }
//动态规划  dp[i]表示以i结尾的最大连续子序列之和

var maxSubArray = function (nums) {
    let dp = Array(nums.length).fill(0)
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]) //两种情况 ：1 延续前面的和  2.从当前的元素开始
    }
    console.log(dp)
    return _.max(dp)
}