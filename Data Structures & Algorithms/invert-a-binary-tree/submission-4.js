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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;

        this.switchLeftAndRight(root);

        return root;
    }

    switchLeftAndRight(node){
        if(node.left===null && node.right===null) return;

        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        node.left && this.switchLeftAndRight(node.left);
        node.right && this.switchLeftAndRight(node.right);
        
    }
}
