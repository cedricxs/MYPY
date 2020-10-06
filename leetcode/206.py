# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        res = None
        while head is not None:
            pre = ListNode(head.val)
            pre.next = res
            res = pre
            head = head.next
        return res

res = {1:2}
print(res[2])