try:
    print(1/0) #尝试执行的部分
except ZeroDivisionError as e:      # as e 用以输出错误提示内容，此错误提示内容为raise错误时异常类的构造函数输入
    print('有误',e)  #出现异常执行部分
else:
    print('无误') #未出现异常执行部分
finally:
    print('完毕') #总会执行部分

#一个except子句可以同时处理多个异常，这些异常将被放在一个括号里成为一个元组
# 例如:except (RuntimeError, TypeError, NameError):
#raise 唯一的一个参数指定了要被抛出的异常。它必须是一个异常的实例或者是异常的类（也就是 Exception 的子类）。
#如果你只想知道这是否抛出了一个异常，并不想去处理它，那么一个简单的 raise 语句就可以再次把它抛出。
try:
    try:
        print(1/0)
    except ZeroDivisionError:
        raise NameError('hhh laji!')
except NameError as err:            #首先print(1/0)发起ZeroDivisionError被内层try/except捕获
    print(err)                      #然后发起NameError被外层捕获,输出异常内容
    #==print(err)
class MyError(Exception):    #自定义用户异常，继承于Exception异常基类
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)
try:
    i = 0
    if i == 0:
        raise MyError('demoerr')
except MyError as e:
    print(e.__str__())
