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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // p = q = null
        if(p === q) return true;

        // either p or q is null and they are not both null
        if(!(p && q)) return false;

        // current value
        if(p.val !== q.val) return false;

        // recusive to pass through each node
        if(!this.isSameTree(p.left, q.left) || !this.isSameTree(p.right, q.right)) return false;

        return true;

    }

    
}
