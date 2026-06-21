class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const result  = {}
        for(let i =0; i < strs.length; i++){
            const str = strs[i];
            const sortedStr = str.split("").sort().join("");
            
            if(result[sortedStr]){
                result[sortedStr].push(str);
            }else{
                result[sortedStr] = [str];
            }
        }

        return Object.values(result);
    }
}
