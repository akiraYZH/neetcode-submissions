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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let res = null;
        let curr = null;
        let curr1 = list1;
        let curr2 = list2;

        if(!list1) return list2;
        if(!list2) return list1;

        if(!res){
            if(curr1.val < curr2.val){
                    res = curr = curr1;
                    curr1 = curr1.next;
                }else{
                    res = curr = curr2;
                    curr2 = curr2.next
                }
        }

        while(curr1 && curr2){
           
                if(curr1.val < curr2.val){
                    curr.next = curr1;
                    curr1 = curr1.next;
                    
                }else{
                    curr.next = curr2;
                    curr2 = curr2.next
                }
                curr = curr.next;
            
        }

        if(curr1){
                curr.next = curr1;
            }else if(curr2){
                curr.next =curr2;
            }

        return res;
    }
}
