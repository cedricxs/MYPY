# 定义一个对整数n求阶乘的函数
def fact(n):
    s = 1
    for i in range(1,n+1):
        s*=i
    return s
print(fact(100))
# 可选参数传递
def multiply(x,y = 10):
    print(x*y)
multiply(99)
multiply(99,2)
def _multiply(x,y=10):
    return x*y,x+y,x**y
a,b,c = _multiply(x=9,y=9)
print(a,b,c)
n = 2  #全局变量
def __multiply(x,y):
    global n  #声明引用全局变量
    return x*y*n
print(__multiply(9,9))
poem = open('poem.txt','r')
lines = poem.read()
lines = poem.readlines()
lines = poem.readline()
for line in poem:
    print(line)
x = [1,2,3]
it = iter(x)
for i in it:
    print(i)
