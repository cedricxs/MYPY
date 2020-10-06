class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True
        dic = {}
        for i in range(len(s)):
            v = dic.get(s[i],None)
            if v == None:
                if t[i] in dic.values():
                    return False
                else:
                    dic[s[i]] = t[i]
            elif v != t[i]:
                return False
        return True

s = Solution()
print(s.isIsomorphic('asd\'','qwe\n'))