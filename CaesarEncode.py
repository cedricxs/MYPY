# CaesarEncode.py
s = input('请输入明文:')
t = ''
for i in range(len(s)):
    if 'a'<=s[i] and 'z'>=s[i]:
        t+=chr(ord('a')+(ord(s[i])-ord('a')+3)%26)
    elif 'A'<=s[i] and 'Z'>=s[i]:
        t+=chr(ord('A')+(ord(s[i])-ord('A')+3)%26)
    else:
        t+=s[i]
print('密文为：{}'.format(t)) 

s = input('请输入密文:')
t = ''
for i in range(len(s)):
    if 'a'<=s[i] and 'z'>=s[i]:
        t+=chr(ord('a')+(ord(s[i])-ord('a')-3)%26)
    elif 'A'<=s[i] and 'Z'>=s[i]:
        t+=chr(ord('A')+(ord(s[i])-ord('A')-3)%26)
    else:
        t+=s[i]
print('明文为：{}'.format(t)) 