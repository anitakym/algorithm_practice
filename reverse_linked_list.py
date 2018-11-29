# reverse linked list
# 输入: 1->2->3->4->5->NULL
# 输出: 5->4->3->2->1->NULL
# 把每个结点的next指到它的前区节点上
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

'''class Solution(object):
    def reverseList(self, head):'''
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
def reverseList(self, head):
    cur, prev = head, None
    while cur:
        cur.next, prev, cur = prev, cur, cur.next
    return prev
