class Solution:
    def isHappy(self, n: int) -> bool:
        n = str(n)
        res = set([n])
        while(n!='1'):
            s = 0
            for m in n:
                s += int(m)**2
            n = str(s)
            if n in res:
                return False
            else:
                res = res | {n}
        return True