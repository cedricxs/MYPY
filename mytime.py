#%Y 年份 0001~9999,例如:1900
#%m 月份 01~12,例如:10
#%B 月名 January~December,例如:April
#%b 月名缩写 Jan~Dec,例如:Apr
#%d 日期 01 ~ 31,例如:25
#%A 星期 Monday~Sunday,例如:Wednesday
#%a 星期缩写 Mon~Sun,例如:Wed
#%H 小时(24h制) 00 ~ 23,例如:12
#%I 小时(12h制) 01 ~ 12,例如:7
#%p 上/下午 AM, PM,例如:PM
#%M 分钟 00 ~ 59,例如:26
#S 秒 00 ~ 59,例如:26
import time
t = time.localtime() #返回现在时间time_struct（元组）对象
print(time.gmtime(10000000000))#取输入时间戳为time_struct对象
print(time.ctime(10000000000))#取输入时间戳为易读字符串
it = iter(t)
try:
    while True:
        print(next(it))
except StopIteration:
    pass
print(list(t))
print(time.mktime(t)) #取输入time_struct对象转化为时间戳
print(time.time())#返回现在时间戳

s = time.strftime('%Y-%m-%d %p %I:%M:%S',t)#以输入格式输出时间
t = time.strptime(s,'%Y-%m-%d %p %I:%M:%S')#以输入格式输出time_struct对象



limit = 10*1000*10
start = time.perf_counter()
while True:
    limit-=1
    if limit<=0:
        break
delta = time.perf_counter()-start
print('程序运行时间是:{}秒'.format(delta))

def coreLoop():
    limit = 10**6
    while (limit > 0):
        limit -= 1
 
def otherLoop1():
    time.sleep(0.2)
 
def otherLoop2():
    time.sleep(0.4)
def main():
    startTime = time.localtime()
    print('程序开始时间:', time.strftime('%Y-%m-%d %H:%M:%S', startTime))
    startPerfCounter = time.perf_counter()
    otherLoop1()
    otherLoop1PerfCounter = time.perf_counter()
    otherLoop1Perf = otherLoop1PerfCounter - startPerfCounter
    coreLoop()
    coreLoopPerfCounter = time.perf_counter()
    coreLoopPerf = coreLoopPerfCounter - otherLoop1PerfCounter
    otherLoop2()
    otherLoop2PerfCounter = time.perf_counter()
    otherLoop2Perf = otherLoop2PerfCounter - coreLoopPerfCounter
    endPerfCounter = time.perf_counter()
    totalPerf = endPerfCounter - startPerfCounter
    endTime = time.localtime()
    print("模块1运行时间是:{}秒".format(otherLoop1Perf))
    print("核心模块运行时间是:{}秒".format(coreLoopPerf))
    print("模块2运行时间是:{}秒".format(otherLoop2Perf))
    print("程序运行总时间是:{}秒".format(totalPerf))
    print('程序结束时间:', time.strftime('%Y-%m-%d %H:%M:%S', endTime))   
main()
