/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root, count = 0) {
        if(root) {
            count+=1;
        let maxLength = Math.max(this.maxDepth(root.left,count),this.maxDepth(root.right,count));
            return maxLength
        }else{
            return count;
        }
    }

    
}
