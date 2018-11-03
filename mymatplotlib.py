import matplotlib.pyplot as plt
import numpy as np
import predict

x = [0,1,2,3,4,5]

y = [0.8,3.1,4.8,7.2,8.8,11.1]

a,b = predict.predictab(x,y)

print('a={:.3f} b={:.3f}'.format(a,b))

yp = []
for i in x:
    yp.append(a*i+b)

plt.plot(x,y,'o',x,yp,'-')

plt.show()