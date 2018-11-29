# 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表
# 给定 1->2->3->4, 你应该返回 2->1->4->3.
# python里的多变量赋值是一次性完成的操作 sequence unpacking
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def swapPairs(self, head):
    pre, pre.next = self, head
    while pre.next and pre.next.next:
        a = pre.next
        b = a.next
        pre.next, b.next, a.next = b, a, b.next
        pre = a
    return self.next