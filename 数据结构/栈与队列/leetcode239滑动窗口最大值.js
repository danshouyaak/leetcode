/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
        let len = nums.length;
        let que = [];///  创建一个数组当队列
        let res = []; ///  用来存放滑动窗口的最大值
        
///  遍历前三个元素
        for(let i = 0 ; i < k ; i++){
            //如果当前元素大于队尾元素，那么队尾元素不可能成为最大值，将其弹出
            while(que.length && nums[i] > nums[que[que.length - 1]]){
                que.pop()
            }
            que.push(i)    ///  存入nums对应的索引，方便取出他的最大值，
        }

        res.push(nums[que[0]]) /// que(0) 对应nums中的索引
////  遍历剩余的元素
        for(let i = k ; i < len ; i++){
            while(que.length && nums[i] > nums[que[que.length - 1]]){
                que.pop();
            }
            que.push(i);

            while(que[0] <= i - k){
                que.shift();
            }
            res.push(nums[que[0]])
        }
            return res;
};