from _ast import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        # 切片
        k %= len(nums)
        nums[:] = nums[-k:] + nums[:-k]
        # nums[:] 数组的浅拷贝
        # nums[:-k] 倒数地k个往后切片
        # nums[-k:]倒数地k个往前切片
        """
        Do not return anything, modify nums in-place instead.
        """