/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let pre;
    [pre, pre.next] = [this, head];
    while (pre.next && pre.next.next) {
        let a = pre.next;
        let b = a.next;
        [pre.next, b.next, a.next] = [b, a, b.next]
        pre = a
    }
    return this.next
};
