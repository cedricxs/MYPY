import re
#re.compile
a = re.compile("[0-9][a-z][0-9]", re.I)
b = a.match('1a24j3')
c = a.search('1a24j3') 
print(b,c)
#re.match()
print(re.match('com','www.baidu.com'))   #从起始位置开始匹配，不匹配直接返回None
print(re.match('\.com','.com.baidu.www'))
#re.search()
print(re.search('com','www.baidu.com.com')) #在整个字符串内查找匹配，找到第一个匹配返回,如果字符串没有匹配，则返回None
#match 和search一旦匹配成功，就是一个match object对象，而match object 对象有以下方法：
b = re.search('com','www.baidu.com')
print(b.group(),b.start(),b.end(),b.span())
#·group()返回被RE匹配的字符串
#·start()返回匹配开始的位置
#·end()返回匹配结束的位置
#·span()返回一个元组包含匹配（开始，结束）的位置
print(re.search('([0-9]*)[a-z]*(?=k)','1234ask').group())  #(?=re)表示界定符，匹配re则停止
a = "123abc456"
print(re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(0))   #123abc456,返回整体  
print(re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(1))   #123  
print(re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(2))   #abc  
print(re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(3))   #456  
print(re.search('(\w)*oo(\w)',"Tina is a good girl , she is cool ,clever, and so on ..."  ))
#re.findall() 遍历匹配，可以获取字符串中所有匹配的字符串，返回一个列表 
print(re.findall('com','www.baidu.com.com'))
print(re.findall('\w*oo\w',"Tina is a good girl , she is cool ,clever, and so on ..."  ))
print(re.findall('(\w)*oo(\w)',"Tina is a good girl , she is cool ,clever, and so on ..."  ))
#findall中re如果有组的话只返回匹配组里的内容
#finditer() 找到RE匹配的所以子串，返回一个顺序访问每一个匹配结果（match对象）的迭代器。
iter = re.finditer(r'\d+','12 drumm44ers drumming, 11.. 10..')  
for i in iter:  
    print(i)  
    print(i.group())  
    print(i.span())  
#split（）按照能够匹配的字符串将string分割后返回列表
s = 'I\'m cedricxs!'
print(re.split('\s',s))
#re.sub()使用re替换string中每一个匹配的子串后返回替换后的字符串
phone = "2004-959-559 # 这是一个电话号码"

num = re.sub(r'#.*$', "", phone)# 删除注释
print ("电话号码 : ", num)

num = re.sub(r'\D', "", phone)# 移除非数字的内容
print ("电话号码 : ", num)
#re.subn()使用re替换string中每一个匹配的子串后返回替换后的字符串与替换次数



#^	匹配字符串的开头
#$	匹配字符串的末尾。
#.	匹配任意字符，除了换行符，当re.DOTALL标记被指定时，则可以匹配包括换行符的任意字符。
#[...]	用来表示一组字符,单独列出：[0amk] 匹配 'a'，'m'或'k'
#[^...]	不在[]中的字符：[^abc] 匹配除了a,b,c之外的字符。
#(re)	匹配括号内的表达式，也表示一个组
#re*	匹配0个或多个的表达式。
#re+	匹配1个或多个的表达式。
#re{n}	匹配n个前面表达式。例如，"o{2}"不能匹配"Bob"中的"o"，但是能匹配"food"中的两个o。
#re?	匹配0个或1个由前面的正则表达式定义的片段，非贪婪方式,也就是说只匹配符合条件的最少字符 
#(?= re)	前向肯定界定符。
#\w	匹配数字字母下划线
#\W	匹配非数字字母下划线
#\s	匹配任意空白字符，等价于 [\t\n\r\f]。
#\S	匹配任意非空字符
#\d	匹配任意数字，等价于 [0-9]。
#\D	匹配任意非数字
#\A	匹配字符串开始
#\Z	匹配字符串结束，如果是存在换行，只匹配到换行前的结束字符串。
#\z	匹配字符串结束
#\G	匹配最后匹配完成的位置。
#\b	匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。
#\B	匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。






