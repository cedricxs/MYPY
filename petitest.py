bills = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,20,5,5,5,5,5,5]
n5 = 0
n10 = 0
for i in range(len(bills)):
    if bills[i]==5:
        n5+=1
    elif bills[i]==10:
        if n5>0:
            n5-=1
            n10+=1
        else:
            break
    elif bills[i]==20:
        if n5>0 and n10>0:
            n5-=1
            n10-=1
        elif n5>=3:
            n5-=3
        else:
            break
    print (n5,n10)
