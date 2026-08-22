/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;

        let curr = head;
        while(curr){
            if(curr.visited){
                return true;
            }else{
                curr.visited = true;
                curr = curr.next;
            }
        }

        return false;
    }
}
