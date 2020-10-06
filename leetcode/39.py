class Solution:
    def combinationSum(self, candidates, target):
        if candidates == []:
            return []
        else :
            res = []
            max_coff = int(target/candidates[0])
            for coff in range(max_coff+1):
                if coff*candidates[0] == target:
                    res += [coff*[candidates[0]]]
                elif coff*candidates[0] > target:
                    return res
                else:
                    sub = self.combinationSum(candidates[1:],target-coff*candidates[0])
                    if sub != []:
                        res+= [coff*[candidates[0]] + r for r in sub]
            return res
                
        

s = Solution()
res = s.combinationSum([2,3,4],15)
print(res)
s = set([3,1,2]) | set([1,2])
print(s)
print(dict.fromkeys([1,2,3],4))


