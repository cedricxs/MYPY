print ('------------------------------cedricxs---------------------------')
import copy         #变量相当于索引
x = {'name':'123','age':20,'l':[1,2,3]}
#y = x              #对象与变量是引用关系，此时变量y与x引用的是同一个对象

y = copy.copy(x)    #浅拷贝：只拷贝对象的第一层数据级此处的[name,age,l],
                    #变量x与变量y指向不同的[name,age,l],但数据还是引用同一个
print (id(x),id(y))
print (id(x['name']),id(y['name']))

y = copy.deepcopy(x)#深拷贝：变量y将x所指向的内存索引都复制一遍，但最终的数据仍是同一个

print(x,y)
