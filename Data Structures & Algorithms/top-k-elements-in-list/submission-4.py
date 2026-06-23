class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {};

        for n in nums:
            map[n] = map[n] +1 if n in map else 1;

        sorted_list = list(dict(sorted(map.items(), key=lambda item: item[1], reverse=True)));
        return sorted_list[:k];
