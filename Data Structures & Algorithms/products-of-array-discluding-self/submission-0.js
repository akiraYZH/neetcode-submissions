class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prevProduct = null;

        let res = nums.map((n,i) => {
            let prod = nums.filter((n2,k)=> i !== k).reduce((prod,current) => prod*current);

            return prod
        });

        return res;
    }
}
