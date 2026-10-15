class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = [];
        for(let i = 0; i < nums.length; i++){
            arr.push([nums[i], i]);
        }

        arr.sort((item1,item2) => item1[0] - item2[0]);

        let l = 0;
        let r = arr.length -1;

        while(l < r){
            if(arr[l][0] + arr[r][0] < target){
                l++;
                continue;
            }

            if(arr[l][0] + arr[r][0] > target){
                r--;
                continue;
            }

            if(arr[l][0] + arr[r][0] === target){
                return [Math.min(arr[l][1], arr[r][1]), Math.max(arr[l][1], arr[r][1])];
            }
        }

        return [];
    }
}
