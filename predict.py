def parseCSV(filename):
    dataNames, data = [], []
    f = open(filename, 'r', encoding='utf-8')
    for line in f:
        splitedLine = line.strip().split(',')
        if '指标' in splitedLine[0]:
            years = [int(x) for x in splitedLine[1:]]
        else:
            dataNames.append(splitedLine[0])
            data.append([float(x) for x in splitedLine[1:]])
    f.close()
    return years, dataNames, data
def showtable(datalist):
    print('{:^80}'.format('国家财政收支线性估计'))
    for line in datalist:
        l = ''
        for item in line:
                l+='{:10}'.format(item)
        print(l)
def means(dlist):
    return sum(dlist)/len(dlist)
def predictab(xlist,ylist):
    xmean,ymean = means(xlist),means(ylist)
    x,y,z,q = xmean*ymean*len(xlist),xmean**2*len(xlist),0,0
    for i in range(len(xlist)):
        z += xlist[i]*ylist[i] 
        q += xlist[i]**2
    a = (x-z)/(y-q)
    b = ymean - a*xmean
    return a, b
def calculator(a,b,xlist):
    y = []
    for x in xlist:
        y.append(round(a*x+b,1))
    return y
    #return [a*x+b for x in xlist]
def writen(filename,newdata):
    file = open(filename,'w')
    for line in newdata:
        for i in range(len(line)):
            line[i] = str(line[i])
        file.write(','.join(line))
        file.write('\n')
    file.close()
def main():       
    years,datanames,datas =  parseCSV('data.csv')
    newyear = [x+2010 for x in range(7)]
    newdata = [['指标',2010,2011,2012,2013,2014,2015,2016]]
    for data,dataname in zip(datas,datanames):
        a,b = predictab(years,data)
        y = calculator(a,b,newyear)
        y.insert(0,dataname)
        newdata.append(y)
    showtable(newdata)
    writen('predicteddata.csv',newdata)
if __name__ == '__main__':
    main()
