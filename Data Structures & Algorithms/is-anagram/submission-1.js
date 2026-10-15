class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        s.split('').forEach(c => {
            map[c] = map[c]? (map[c] +1) : 1;
        });

        const arr = t.split('');

        for(let i = 0; i < arr.length; i++){
            if(!map[arr[i]]) return false;
            if(map[arr[i]]) map[arr[i]]-=1;
            if(map[arr[i]] === 0) delete map[arr[i]];
        }

        return Object.keys(map).length === 0;
    }
}
