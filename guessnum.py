import random
target = random.randint(1,1000)
count = 0
while True:
    try:
        num = eval(input('请猜想数字的大小:'))
        
    except:
        print('请输入一个整数!')
        continue
    count+=1
    if num > target:
        print('猜大啦!')
    elif num < target:
        print('猜小啦!') 
    else:
        break;
print('恭喜你猜对啦!,数字为{0},你猜的次数为{1}'.format(target,count))