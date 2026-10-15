class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length < 3) return [];
        let res = [];

        const sortedNums = nums.sort((n1,n2) => n1 - n2);

        for(let i = 0; i < sortedNums.length -2; i++){
            if(sortedNums[i] > 0) break;
            
            if(i > 0){
                if(sortedNums[i] === sortedNums[i-1]){
                    continue;
                }
            } 

            const target = 0 - sortedNums[i];

            let l = i +1;
            let r = sortedNums.length - 1;

            while(l<r){
                if(sortedNums[l] + sortedNums[r] < target){
                    l++;
                    continue;
                }

                if(sortedNums[l] + sortedNums[r] > target){
                    r--;
                    continue;
                }

                
                
                if(sortedNums[l] + sortedNums[r] === target){
                    

                    res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
                    l++;
                    r--;
                    while(l < r && sortedNums[l] === sortedNums[l-1]){
                        l++;
                        continue;
                    }
                }
            }
        }


        return res;
    }
}
