/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
            const res = new Set();//用来去重
            const set = new Set(nums2)//把nums2里面的数组转为set，搜收的时候时间复杂度由n（n）-->n（1）
//传进来的是数组
            for(num of nums1){
                if(set.has(num)){//把nums1里面的数据去nums2里面判断有没有
                    res.add(num);//有的话就添加进res里面的去
                }
            }

        return Array.from(res);

    //    Array.from() 可以把set或map转换成数组
};