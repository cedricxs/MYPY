x = [];num1=0;num2=0;num3=0
for i in range (0,100):
    x.append(i+1)
for i in  x[:]:
    b = i%10
    while b == 5 or b%2 == 0:
        if b%2==0 and b!=0:
            num1 =num1 + 1 
            i=i/2  
        elif b==5:
             num2 = num2 + 1 
             i = i/5
        else: 
            num3 = num3 + 1 
            i = i/10
        b = i%10            
r= min(num1,num2)+num3
print (r)