class Solution:
    def reverseBits(self, n: int) -> int:
        m = bin(n)
        m = m[2:]
        m = '0'*(32-len(m))+m
        m = m[len(m)-1::-1]
        return (int(m,2))
        


s = Solution()
s.reverseBits(10)