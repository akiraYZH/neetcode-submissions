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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let cur1 = l1;
        let cur2 = l2;
        let dummy = new ListNode(0);
        let dummyHead = dummy;
        let shouldPlusOne = false;

        while(cur1 && cur2){
                let sum = cur1.val + cur2.val;

                if(shouldPlusOne) sum++;
                shouldPlusOne = false;

                shouldPlusOne = sum >= 10;
                let val = sum % 10;
                
                dummy.next = new ListNode(val);

                cur1 = cur1.next;
                cur2 = cur2.next;
                dummy = dummy.next;
        }

        if(!cur1 && !cur2 && shouldPlusOne){
            dummy.next = new ListNode(1);
        }

        while(cur1){
            if(shouldPlusOne){
                cur1.val++;
                shouldPlusOne = false;

                shouldPlusOne = cur1.val >= 10;
                let val = cur1.val % 10;
                dummy.next = new ListNode(val);
            }else{
                dummy.next = new ListNode(cur1.val);
            }

             cur1 = cur1.next;
            dummy = dummy.next;
        }

        while(cur2){
            if(shouldPlusOne){
                cur2.val++;
                shouldPlusOne = false;

                shouldPlusOne = cur2.val >= 10;
                let val = cur2.val % 10;
                dummy.next = new ListNode(val);
            }else{
                dummy.next = new ListNode(cur2.val);
            }

             cur2 = cur2.next;
            dummy = dummy.next;
        }

        if(shouldPlusOne){
            dummy.next = new ListNode(1);
        }

        return dummyHead.next;
    }
}
