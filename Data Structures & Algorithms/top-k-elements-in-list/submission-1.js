class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]]){
                map[nums[i]] +=1;
            }else{
                map[nums[i]] = 1
            }
        }

        const keys = Object.keys(map);

        keys.sort((n1, n2)=> map[n2] - map[n1]);

        return keys.slice(0, k);
    }
}
