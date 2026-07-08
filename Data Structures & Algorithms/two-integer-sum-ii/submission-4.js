class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length -1;

        while(i < j){
            if(numbers[i] + numbers[j] === target){
                break;
            }

            if(numbers[i] + numbers[j] < target){
                i+=1;
                continue;
            }

            if(numbers[i] + numbers[j] > target){
                j-=1;
                continue;
            }
        }

        return [i+1, j+1];
    }
}
