class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = {};

        for(let i = 0; i < s1.length; i++){
            map[s1[i]] = (map[s1[i]] || 0) + 1;
        }

        let mapClone = JSON.parse(JSON.stringify(map));

        let j=0,i = 0;
        while(i < s2.length){
            if(mapClone[s2[i]]){
                mapClone[s2[i]] -= 1;
                if(mapClone[s2[i]] === 0) delete mapClone[s2[i]];
                if(Object.keys(mapClone).length === 0){
                    return true;
                }
                i++;
                
            }else{
               if(map[s2[j]] && map[s2[j]] > (mapClone[s2[j]] || 0) && j <= i){
                mapClone[s2[j]] = (mapClone[s2[j]] || 0) + 1;
                j++;
               }else{
                i++;
                j++;
               }
            }
        }

        return false;
    }
}
