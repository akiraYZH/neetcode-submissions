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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let arr = [];

        while(curr){
            arr.push(curr);
            curr = curr.next;
        }

        const removeIndex = arr.length - n;
        if(removeIndex === 0){
            return head.next;
        }

        arr[removeIndex - 1].next = arr[removeIndex].next;
        return head
    }
}
