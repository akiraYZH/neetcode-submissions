class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {};

        for i, val in enumerate(nums):
            missNum = target - nums[i];
            if missNum in map:
                return [map[missNum],i]
            map[val] = i;
            
        