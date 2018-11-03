#迭代是Python最强大的功能之一，是访问集合元素的一种方式。
#迭代器是一个可以记住遍历的位置的对象。
#迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。迭代器只能往前不会后退。
#迭代器有两个基本的方法：iter() 和 next()。
#字符串，列表或元组对象都可用于创建迭代器(序列类型，可迭代)：
#迭代器对象可以使用常规for语句进行遍历  也可以使用 next() 函数
x = [i for i in range(10)]
it = iter(x)
for i in it:
    print(i,end=' ')
it = iter(x)
try:
    while True:
        print(next(it),end = ' ')
except StopIteration:
    print()
#在 Python 中，使用了 yield 的函数被称为生成器（generator）。
#跟普通函数不同的是，生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。
#在调用生成器运行的过程中，每次遇到 yield 时函数会暂停并保存当前所有的运行信息，返回 yield 的值, 并在下一次执行 next() 方法时从当前位置继续运行。
#调用一个生成器函数，返回的是一个迭代器对象。
def hhh():
    x = 0
    for i in range(10):
        x = i
        yield x #保存每一步的x的值，作为每一个迭代值
it = hhh()
print(type(it))
for i in it:
    print(i,end=' ')
it = hhh()
try:
    while True:
        print(next(it),end = ' ')
except StopIteration:
    print()
