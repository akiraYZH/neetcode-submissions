class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(!prices.length) return 0;

        let maxProfit = 0;
        let l = 0;
        for(let r = 1; r < prices.length; r++){
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            if(prices[r] < prices[l]) {
                l = r;
            }
        }

        return maxProfit;
    }
}
