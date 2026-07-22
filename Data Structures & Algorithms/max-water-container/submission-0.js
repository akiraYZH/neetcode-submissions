class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(heights.length <= 1) return 0;
        
        let l = 0;
        let r = heights.length -1;

        let maxArea = Math.min(heights[l], heights[r]) * (r - l);

        while(l < r){
            

            if(heights[l] <= heights[r]){
                l++;
            }else{
                r--
            }
            maxArea = Math.max(maxArea, Math.min(heights[l], heights[r]) * (r - l));
        }

        return maxArea;


    }
}
