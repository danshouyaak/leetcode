/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
        let map = new Map(); //用来计算出现次数；
        let cont = 0;
        for(let i = 0 ; i < nums1.length ; i++){
            for (let j = 0; j < nums2.length; j++) {
                if(map.has(nums1[i]+nums2[j])){//记录出现过的次数
                    map.set((nums1[i]+nums2[j]) , map.get(nums1[i]+nums2[j])+1);
                }else{
                    map.set((nums1[i]+nums2[j]) , 1 );
                }
            }
        }

        for(let k = 0 ; k < nums3.length ; k++){
            for (let l = 0; l < nums4.length; l++) {
                if(map.has(-(nums3[k]+nums4[l]))){/////假如nums3[k]+nums4[l]为负数，那么（nums3[k]+nums4[l]）+nums1[i]+nums2[i] = 0
                                                        //-（nums3[k]+nums4[l]） 就等于nums1[i]+nums2[i] 就可以从map里面找出他的次数
                    cont += map.get(-(nums3[k]+nums4[l]));
                }
            }
        }

        return cont;
};