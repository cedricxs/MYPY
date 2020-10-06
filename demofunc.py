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
#加了星号 * 的参数会以元组(tuple)的形式导入，存放所有未命名的变量参数。
def t(x,*y):   #先把命名的参数变量赋值，之后全是可变长参数，以元组类型输入
    print(x)
    print(y)
t(1,2,3,4,5)
#加了两个星号 ** 的参数会以字典的形式导入。
def s(x,**y):
    print(x)
    print(y)
s(y = 1,x = 2,z = [3,4,5])  #再传**参数时，一定要有a = 1这种形式作为键值对传入函数
#有未加*的形参时,实参传入时若指定形参名则可任意位置传入实参,若没指定形参则按照定义顺序传入实参
#若没有未加*的形参时(*args,**kwargs)时，指定参数名(函数定义不存在)的参数按kwargs字典传入,未指定的按args元组传入
#python 使用 lambda 来创建匿名函数。
#所谓匿名，意即不再使用 def 语句这样标准的形式定义一个函数。
#　　lambda 只是一个表达式，函数体比 def 简单很多。
#    lambda的主体是一个表达式，而不是一个代码块。仅仅能在lambda表达式中封装有限的逻辑进去。
#    lambda 函数拥有自己的命名空间，且不能访问自己参数列表之外或全局命名空间里的参数。
#    虽然lambda函数看起来只能写一行，却不等同于C或C++的内联函数，后者的目的是调用小函数时不占用栈内存从而增加运行效率。
#    lambda [arg1 [,arg2,.....argn]]:expression
_sum = lambda x,y,z:x+y+z
print(type(_sum))
print(_sum(1,3,4))
name = 10    #不可变类型需使用global 声明才可在函数内改变
l = [1,2,3] #可变类型不需使用global 即可在函数内改变
def change():
    global name
    name = 'asd'
    l.append(10)
change()
print(name)
print(l)
