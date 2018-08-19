txt = open('1.txt','r').read()

txt = txt.lower()

p = '!"#$%&()*+,-./:;<=>?@[\\]^_‘{|}~，\''
for i in p:
    txt = txt.replace(i,' ')
txt = txt.split()
dic = {}

for word in txt:
    dic[word] = dic.get(word,0) + 1

s = list(dic.items())

s.sort(key=lambda x:x[1],reverse=True)

print('使用频率前十的单词:')
for i in range(10):
    print('{0:<10}{1:>5}'.format(s[i][0],s[i][1]))

