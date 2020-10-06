class Solution:
    def rob(self, nums) -> int:
        l = len(nums)
        if l == 0:
            return 0
        elif l ==1:
            return nums[0]
        else:
            dp = []
            dp += [nums[0],max(nums[0],nums[1])]
            for i in range(2,l):
                dp += [max(dp[i-2]+nums[i],dp[i-1])]
        return dp[l-1]

s = Solution()

print(s.rob([183,219,57,193,94,233,202,154,65,240,97]))
n = 10
print(type(str(10)))