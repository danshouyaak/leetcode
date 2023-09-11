/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var reverseStr = function(s, k) {
//     //let arr = s.split('');// 切割字符串
//     let dp = new Array();
//     let k_dp = new Array();

//  for (let i = 0; i < s.length ; i++) {
//      k_dp.push(s[i]);

//      if(k_dp.length == k || (k_dp.length < k && i == s.length - 1)){
//          k_dp.reverse();
//      }
//      if (k_dp.length == 2 * k || i == s.length - 1){
//          dp = dp.concat(k_dp);
//          k_dp = [];
//      }
//  }
 
//  return dp.join('');

// };

