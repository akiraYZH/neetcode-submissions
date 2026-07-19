class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length -1;
        let m = null;

        while(r !== l && r>=l){
            if(matrix[l][matrix[l].length-1] < target){
                l++;
            }

            if(matrix[r][0] > target){
                r--; 
            }
        }

        if(l!== r) return false;
        
        m = l;

        let isFound = false;

        matrix[m].forEach(n => {
            if(n === target){
                isFound = true;
            }
        });


        return isFound;

        
    }
}
