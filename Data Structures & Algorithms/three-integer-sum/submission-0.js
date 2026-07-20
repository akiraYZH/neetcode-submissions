class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const res = [];
        
        for(let i =0; i < nums.length-2; i++){
            if(nums[i] > 0) break; 
            if(i>0 && nums[i] === nums[i - 1]) continue;
            let target = 0 - nums[i];
            let j = i + 1;
            let k = nums.length -1;
            
            while(j < k){
                
                if(nums[j] + nums[k] < target){
                    j++;
                }else if(nums[j] + nums[k] > target){
                    k--;
                }else{
                    res.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(j< k && nums[j] === nums[j -1]){
                        j++;
                    }
                }
            }
        }

        return res;
    }
}
