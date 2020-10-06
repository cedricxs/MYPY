class Solution:
    def find_min_ecart(self,l):
        s = l[1]-l[0]
        for i in range(1,len(l)-1):
            s = min(s,l[i+1]-l[i])
        return s
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dic = {}
        for i in range(len(nums)):
            if dic.get(nums[i],None) is None:
                dic[nums[i]] = [i]
            else:
                dic[nums[i]] = dic.get(nums[i])+[i]
        lists = dic.values()
        for l in lists:
            if len(l) >1:
                if self.find_min_ecart(l) <= k:
                    return True
        return False
        enumerate