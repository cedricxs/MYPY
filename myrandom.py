#seed(a=None) 初始化随机数种子,默认值为当前系统时间
#random() 生成一个[0.0, 1.0)之间的随机小数
#randint(a, b)
#getrandbits(k)生成一个k比特长度的随机整数

#randrange(start, stop[, step]) 生成一个[start, stop)之间以step为步数的随机整数
#uniform(a, b) 生成一个[a, b]之间的随机小数
#choice(seq) 从序列类型(例如:列表)中随机返回一个元素
#shuffle(seq) 将序列类型中元素随机排列,返回打乱后的序列
#sample(pop, k) 从pop类型中随机选取k个元素,以列表类型返回
#设置随机数种子的好处是可以准确复现随机数序列,用于重复程序的运行轨迹。对于仅使用随机数但不需要复现的情形,可以不用设置随机数种子。
from random import *
#seed(1)
print(random())
print(randint(1,10))
print(getrandbits(10)) #[0:2**k]中随机整数
print(uniform(1,2))
x = [i for i in range(10)]
print(choice(x))
shuffle(x)
print(x)
x = {i for i in range(10)}
print(x)
print(sample(x,3))
import sys
print(sys.argv)
