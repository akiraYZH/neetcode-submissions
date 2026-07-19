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

        while(r>=l){
            let m = Math.floor((r + l)/2);
            if(matrix[m][matrix[m].length-1] < target){
                l = m + 1;
            } else if(matrix[m][0] > target){
                r = m -1;
            } else{
                break;
            }
        }

        if(!(l <= r)) return false;

        m = Math.floor((r + l)/2);;

        let isFound = false;

        matrix[m].forEach(n => {
            if(n === target){
                isFound = true;
            }
        });


        return isFound;

        
    }
}
