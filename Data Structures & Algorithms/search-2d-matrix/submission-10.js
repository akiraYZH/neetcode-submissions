class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bottom = matrix.length -1;

        while(bottom >= top){
            let row = Math.floor((bottom + top)/2);
            if(matrix[row][matrix[row].length-1] < target){
                top = row + 1;
            } else if(matrix[row][0] > target){
                bottom = row -1;
            } else{
                break;
            }
        }

        if(!(top <= bottom)) return false;

        let row = Math.floor((bottom + top)/2);
        let l = 0;
        let r = matrix[row].length;

        while(l <= r){
            const m = Math.floor((l + r)/2);

            if(matrix[row][m] > target){
                r = m-1;
            }else if(matrix[row][m] < target){
                l = m + 1;
            }else{
                return true
            }
        }


        return false;

        
    }
}
