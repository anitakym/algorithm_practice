/*在一个解构表达式中可以交换两个变量的值。
没有解构赋值的情况下，交换两个变量需要一个临时变量*/
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
/*cur,prev节点集体每次后移一位，每次改变的是next指针的指向*/
var reverseList = function(head) {
    let cur = head;
    let prev = null;
    while (cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
};