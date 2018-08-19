num = eval(input('please input a number:'))
if num > 100:
    print('large')
else:
    print('small')
print('你好')
#python2.x不支持中文
#输出1000以内斐波那契数列
myfile = open('1.txt','w')
a,b = 0,1
print(a,b)
while a<1000:
    print(a,end=',')
    print(a,file = myfile) #输出重定向到myfiile中，缺省时为file = sys.stdout
    a,b = b,a+b  
myfile.close()
#print 缺省时:end = '\n'最后输出 , sep = ' '间隔输出
print(end = '\n')
#根据半径计算圆面积
r = 25
area = 3.1415*r*r
print(area)
print("{:.2f}".format(area))#只输出两位小数
#绘制五角红星
#import turtle
#turtle.color('red','red')
#turtle.begin_fill()
#for i in range(5):
#    turtle.fd(200)
#    turtle.rt(144)
#turtle.end_fill()
#turtle.done()
#程序运行计时
import time
limit = 10*1000*10
start = time.perf_counter()
while True:
    limit-=1
    if limit<=0:
        break
delta = time.perf_counter()-start
print('程序运行时间是:{}秒'.format(delta))
#绘制七彩圆圈
#import turtle
#colors = ['red','orange','yellow','green','blue','indigo','purple']
#for i in range (7):
#    c = colors[i]
#    turtle.color(c,c)
#    turtle.begin_fill()
#    turtle.rt(360/7)
#    turtle.circle(50, extent=None, steps=None)
#    turtle.end_fill()
#turtle.done()
s = "To be or not to be, that’s a question. ——莎士比亚"
for i in range(-1,-len(s)-1,-1):
    print(s[i],end='')
print(1+1j.imag)
print(end = '\n')
print(10//3)
print(divmod(10,3))
print(round(3.446,2))
print(pow(2,4,6))
x,y = 10,20
print(x,y)
print(type(input('str:')))
print(type(eval(input('int:'))))
s = "this is the first line\
sec line\
third line"
print(s)
s = '''this is the first line
sec line
third line'''
print(s)
s = 'this is single\'\' and this is double\"\"'
print(s)
print('{1}曰:你好啊"{0}'.format('cedricxs','孔子'))
s = '等级考试'
print("s的值为{0:>25}".format(s))
print('s value is {:*^2}'.format(s))
print('s value is {:.２}'.format(s))
print('x value is {:.8f}'.format(x))
print('value is 0x{0:x},0o{0:o},{0:b}b'.format(100))
print('1:{1},0:{0}'.format(100,20))
print(ord('x'),chr(3000),hex(x),oct(x))
x = ['1','2','3']
print(s.join(x))
s = {1010,'1010',10.0}
t = {1010,'1010',11.0}
print(s-t,t-s,s&t,s^t,s|t)
s = '知之为知之不知为不知'
t = 'h'
print(t.join(s))
s = {1,2,3}
print(list(s))
d = {'1':1,'2':2,'3':3}
print(d.items()) #返回dicr_items类型　可用list()转化为list
print(d.get('3'),d.get('4',"don't exisit"))
del d['1']
print(d)






