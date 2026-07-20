class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s) return 0;
        let l = 0;
        let r = 0;
        let maxL = 0;
        let map = {};

        while(r < s.length){
            if(map[s[r]] !== undefined && map[s[r]] >= l){
                l = map[s[r]] + 1;
            }

            maxL = Math.max(maxL, r - l + 1);
            map[s[r]] = r;
            r++
        }

        return maxL;
    }
}
