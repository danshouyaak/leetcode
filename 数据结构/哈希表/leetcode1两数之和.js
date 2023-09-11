/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
            const map = new Map();//用来添加遍历过的数组，用来查询
            for(let i = 0 ; i < nums.length ; i++){
                const comp = target - nums[i];

                if(map.has(comp)){
                    return [map.get(map) , i];
                }else{
                    map.set(nums[i] ,i );
                }
            }

            return [];
};