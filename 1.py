#在 python 中，类型属于对象，变量是没有类型的：
#a=[1,2,3]
#a="Runoob"
#以上代码中，[1,2,3] 是 List 类型，"Runoob" 是 String 类型，而变量 a 是没有类型，她仅仅是一个对象的引用（一个指针），可以是 List 类型对象，也可以指向 #String 类型对象。
#*在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。
#    不可变类型：变量赋值 a=5 后再赋值 a=10，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变a的值，相当于新生成了a。
#    可变类型：变量赋值 la=[1,2,3,4] 后再赋值 la[2]=5 则是将 list la 的第三个元素值更改，本身la没有动，只是其内部的一部分值被修改了。
#python 函数的参数传递：
#    不可变类型：类似 c++ 的值传递，如 整数、字符串、元组。如fun（a），传递的只是a的值，没有影响a对象本身。比如在 fun（a）内部修改 a 的值，只是修改另一个复制的对象，不会影响 a 本身。
#    可变类型：类似 c++ 的引用传递，如 列表，字典。如 fun（la），则是将 la 真正的传过去，修改后fun外部的la也会受影响
#python 中一切都是对象，严格意义我们不能说值传递还是引用传递，我们应该说传不可变对象和传可变对象。

import math
print("---------------------cedricxs----------------------")
d=input('expression:')
print(d)
c=d.split('=')[0].split('+')
c.append(d.split('=')[1])
#print(c)
print(type(c))
if '*' in c[0]:
    a=int(c[0].split('*')[0])
else: 
    a=int(1)
if '*' in c[1]:
    b=int(c[1].split('*')[0])
else: 
    b=int(1)
e=int(c[2])
f=int(c[3])
#print(a,b,e,f)
t=b*b-4*a*(e-f)
try:
    root1=(-b+math.sqrt(t))/(2*a)
    root2=(-b-math.sqrt(t))/(2*a)
    print('root1=',root1,'root2=',root2)
except ValueError:
    print('no root')

import copy
print("\n\n-------------------------------------------------- cedricxs ----------------------------------------------------")
myfile = '1'
infile = open(myfile,'r')
data=[]
b=[]
a=[]
x=[0,0,0]
line = infile.readline()
while line!="":
    data.append(line.split(','))
    line = infile.readline()
for i in range(3):
    a.append(data[i][0:3])
    b.append(data[i][3])
u=0.0001
y=copy.copy(x)
sum=0
k=1
while True:
    for i in range (len(b)):
        for j in range(len(b)):
            if j!=i:
                sum=sum+eval(a[i][j])*x[j]
        x[i]=(eval(b[i])-sum)/eval(a[i][i])
        sum=0
        max=0
    for i in range(len(x)):
        if abs(y[i]-x[i])>max:
            max=abs(y[i]-x[i])
    if max<u:
        break
    else:
        print(x,k)
        y=copy.copy(x)
        k=k+1
print(x,k)

