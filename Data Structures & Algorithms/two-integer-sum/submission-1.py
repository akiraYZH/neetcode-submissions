class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {val: i for i, val in enumerate(nums)};

        for i, val in enumerate(nums):
            missNum = target - nums[i];
            if missNum in map and i !=  map[missNum]:
                return [i, map[missNum]]
            
        