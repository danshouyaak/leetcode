var nextGreaterElement = function (nums1, nums2) {
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        let j = 0;
        while (j < nums2.length && nums1[i] !== nums2[j]) {
            j++   //在nums2 找到之后记录下来
        }
        let k = j + 1 /// k 的也不能超过nums2的长度
        while (k < nums2.length && nums2[k] < nums2[j]) {
            k++
        }
        res.push(k < nums2.length ? nums2[k] : -1)
    }
    return res
}