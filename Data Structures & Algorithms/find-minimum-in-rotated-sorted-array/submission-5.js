class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length -1;
        let m = null;
        let res = nums[0];

        while (l <= r){
            if(nums[l] <= nums[r]){
                res = Math.min(res, nums[l]);
                break;
            }

            m =  Math.floor((r + l)/2);

            if(nums[m] >= nums[l]){
                l = m + 1;
            }else{
                r = m;
            }
        }

        return res;
    }
}
