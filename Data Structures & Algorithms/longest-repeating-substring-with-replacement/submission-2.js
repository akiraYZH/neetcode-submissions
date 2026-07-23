class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const letters = new Set(s);
        let res = null;

        for(let c of letters){
            let i = 0;
            let count = 0;

            for(let j = 0;j < s.length; j++){
                if(c === s[j]){
                    count++;
                }else{
                    while(j - i + 1 - count > k){
                        if(c === s[i]){
                            count--;
                        }
                        
                        i++;
                    }
                }

                res = Math.max(res, j - i + 1)
            }

        }

        return res;
    }
}
