#pendown()
#penup() 
#pensize(width) 
#color()
#begin_fill()
#end_fill() 
#filling() 
#clear() 清空当前窗口,但不改变当前画笔的位置
#reset() 清空当前窗口,并重置位置等状态为默认值
#screensize() 设置画布的长和宽
#hideturtle() 隐藏画笔的turtle形状
#showturtle() 显示画笔的turtle形状
#isvisible() 如果turtle可见,则返回True
#forward() 
#backward() 
#right(angle) 
#left(angle) 
#goto(x,y) 移动到绝对坐标(x,y)处
#setx( ) 将当前x轴移动到指定位置
#sety( ) 将当前y轴移动到指定位置
#setheading(angle) 设置当前朝向为angle角度
#home() 设置当前画笔位置为原点,朝向东。
#circle(radius, e ) 绘制一个指定半径r和角度e的圆或弧形
#dot(r,color) 绘制一个指定半径r和颜色color的圆点
#undo() 撤销画笔最后一步动作
#speed() 1-10
import turtle
turtle.setup(1000,1000,0,0)
#turtle.tracer(False)#是否输出轨迹
turtle.begin_fill()
turtle.color('red','yellow')
turtle.showturtle()
#turtle.hideturtle()
turtle.fd(200)
turtle.end_fill()
turtle.pu()
turtle.goto(0,200)
turtle.pd()
turtle.left(90)
turtle.forward(100)
turtle.seth(180)
turtle.backward(200)
turtle.circle(100, 180, steps=None)
turtle.dot(50,'red')
turtle.done() #保持窗口