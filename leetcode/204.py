import math
class Solution:
    def countPrimes(self, n: int) -> int:
        if n <2:
            return 0
        t = (n+1)*[True]
        for i in range(2,n):
            if t[i] == False:
                continue
            j = i+i
            while j<n:
                t[j] = False
                j += i 
        return list.count(t,True)-3

s = Solution()
print(s.countPrimes(499999))