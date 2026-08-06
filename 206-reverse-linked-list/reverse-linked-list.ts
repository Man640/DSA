/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
     // Base case: empty list or single node
    if (head === null || head.next === null) {
        return head;
    }
    
    // Recurse to the end of the list
    const newHead: ListNode | null = reverseList(head.next);
    
    // Flip the pointer direction
    head.next.next = head;
    head.next = null; // Prevent cycles
    
    return newHead;

    //TC = > O(n);
    //SC = > O(n)
};