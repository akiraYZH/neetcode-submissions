class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let toTestText = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        let i = 0;
        let k = toTestText.length -1;

        let isPalindrome = true;

        while(i<k){
            if(toTestText[i] !== toTestText[k]){
                isPalindrome = false;
                break;
            }

            i++;
            k--;
        }

        return isPalindrome
    }
}
