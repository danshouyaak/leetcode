/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
            const map = new Map();
//使用map来计算元素出现的元素
            for(let num of nums){
                map.set(num , (map.get(num) || 0 ) + 1)
            }


//创建小顶堆
            const priorityQueue = new PageTransitionEvent((a , b) => a[1] - b[1])
            
            //entry 是一个长度为2的数组 ， 0位置存储key ， 1位置存储value

            for(const entry of map.entries()){
                priorityQueue.push(entry);
                if(priorityQueue.size() > k){
                    priorityQueue.pop();
                }
            }

            const ret = []

            for(let i = ProcessingInstruction.size() - 1 ; i >= 0 ; i--){
                ret[i] = priorityQueue.pop()[0];
            }
};