import itertools
class Solution:
    def recursive(self, candidates, target):
        if candidates == []:
            return []
        else :
            res = []
            for coff in range(2):
                if coff*candidates[0] == target:
                    res += [coff*[candidates[0]]]
                elif coff*candidates[0] > target:
                    return res 
                else:
                    sub = self.recursive(candidates[1:],target-coff*candidates[0])
                    if sub != []:
                        res+= [coff*[candidates[0]] + r for r in sub]
                print(res)
            return res
    def combinationSum(self, candidates, target):
        candidates.sort()
        res = self.recursive(candidates,target)
        res.sort()
        new_res = list(res for res,_ in itertools.groupby(res))
        return new_res
                
        

s = Solution()
res = s.combinationSum([1,2,3,4,5,6,7,8,9]
,27)
print(res)
