class man:  #self 相当于this
    __privatevar = 0 #两个下划线开头，声明该属性为私有，不能在类地外部被使用或直接访问。在类内部的方法中使用时 self.__privatevar
    def __init__(self, *args):
        self.name = args[0]
        self.age = args[1]
    def printinfo(self):
        print(self.name,self.age,self.__privatevar)
    def __printinfo(self): #两个下划线开头，声明该方法为私有方法，只能在类的内部调用 ，不能在类地外部调用
        print(self.name,self.age,self.__privatevar)



class sun(man):
    def __init__(self, *args):
        self.miao = 'cat'
        return super().__init__(args[0],args[1])
    def printinfo(self):
            super().printinfo()
            print(self.miao)           
    def icanmiao(self):
        print('miao miao miao!')

class func:        #函数对象
    def __call__(self,num):
        print(num)


def main():
    m = man('cedricxs',20)
    m.printinfo()
    m._man__printinfo()
    m.__delattr__('name')#delattr(man,'name')删除man对象的属性，不能删除方法
    try:
        man.printinfo()
    except:
        print('\'singleclass\' object has no attribute \'name\'')

    s = sun('miao',20)
    s.printinfo()
    s.icanmiao() 

    f = func()  #函数对象
    f(10)

    print(type(s))  #<class '__main__.sun'>当前__main__模块中的sun类　如果该脚本被其他脚本导入为模块，则脚本名字就是模块名字类为<class 'myclass.sun'>
if __name__ == '__main__':#此句话的作用在于此模块被其他脚本导入时，此模块的一些语句不会执行，因为被导入后此模块就不叫'__main__'了
    main()