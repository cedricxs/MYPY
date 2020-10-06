#无参装饰器函数,在装饰器函数内定义函数,在该函数内调用被装饰函数并加以装饰
def decorator_method(func):
    def decorated_method():
        func()
        print('other things do here as decoration')
    return decorated_method

#the @decorator_method is just a short way of saying:
#method_nomal = decorator_method(method_nomal)
@decorator_method
def method_nomal():
    print('this is a method normal')

method_nomal()

print('------------------------cedricxs----------------------------')
#带参装饰器函数
def decorator_method_para(name:str):
    def decorator_method(func):
        def decorated_method(*args,**kwargs):
            print('this decorator named:'+name)
            #func(args[0],args[1])
            func(kwargs['a'],kwargs['b'])
            print('other things do here as decoration')
        return decorated_method
    return decorator_method
 
@decorator_method_para('cedricxs')
def method_nomal_para(a:int,b:int):
    print('this is a method normal which does a+b={0}'.format(a+b))

method_nomal_para(a = 1, b = 5)

#装饰器类
import datetime
class Logger:
    def __init__(self,logfile):
        self.logfile = logfile
    
    def __call__(self,func):
        def wraps(*args,**kwargs):
            result = func(kwargs['a'],kwargs['b'])
            self.loginfo(result)
        return wraps


    def loginfo(self, info:str):
        with open(self.logfile,'a+') as f:
            f.write('this is a log info indique that a decorated method has been called at {0}.\n'
            .format(datetime.datetime.now()))
            f.write(info)
            f.write('\n')

@Logger('log.txt')
def method_will_decoratedBy_Class(a:int,b:int):
    print('this is a method normal which does a+b={0}'.format(a+b))
    return 'this is a method normal which does a+b={0}'.format(a+b)

method_will_decoratedBy_Class(a = 1, b = 5)