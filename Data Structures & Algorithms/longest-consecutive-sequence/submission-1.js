class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        if(!nums.length === 1) return 1;

        const sortedArr = Array.from(new Set(nums)).sort((n1,n2) => n1-n2);
    
        let maxCount = 1;
        let count = 1;
        let initial = sortedArr[0];

        
        for(let i = 1; i < sortedArr.length; i++){
            if(initial + 1 === sortedArr[i]){
                count++;
                initial +=1;
            }else{
                count = 1;
                initial = sortedArr[i]
            }

            if(count > maxCount) maxCount = count;
        }

        return maxCount;
    }
}
