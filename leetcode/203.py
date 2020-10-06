# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeElements(self, head, val: int):
        if head is None:
            return None
        if head.next is None:
            if head.val ==val:
                return None
            else:
                return head
        else:
            if head.val == val:
                return self.removeElements(head.next,val)
            else:
                res = head
                res.next = self.removeElements(head.next,val)
                return res 