txt = '''
--调寄《临江仙》
第一回　宴桃园豪杰三结义  斩黄巾英雄首立功
话说天下大势,分久必合,合久必分。周末七国分争,并入于秦。及秦灭之后,
楚、汉分争,又并入于汉。汉朝自高祖斩白蛇而起义,一统天下,后来光武中兴,
传至献帝,遂分为三国。
'''
linewidth = 30
def linesplit(txt):
    ps = [',','.','。','?','!','　',' ']  
    for p in ps:
        txt = txt.replace(p,'\n')
    txt = txt.split('\n')
    t = []
    for i in txt:
        if i!='':
            t.append(i)
    return t
def juzhong(txt):
    global linewidth
    for line in txt:
         print(line.center(linewidth, chr(12288)))
def shuxiang(txt):
    t = []
    m = 0
    for i in range(len(txt)):
            m = max(m,len(txt[i]))
    for i in range(m):
        t.append('')
    for i in range(m):
        for j in range(len(txt)-1,-1,-1):
            if len(txt[j]) <= i or txt[j][i]==' ':
                t[i]+='　'
            else:
                t[i]+=txt[j][i]    
    return t    
txt = linesplit(txt)
juzhong(txt)
txt = shuxiang(txt)
juzhong(txt)