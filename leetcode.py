import requests
import re
import time 

requests = requests.Session()   #维持会话
'''
import requests
import re
from requests.cookies import RequestsCookieJar
cookie = RequestsCookieJar() 
cookie.set('LEETCODE_SESSION','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTE2MDI0NCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImExZDhjODA1N2RkNzFmZDZhNzEyYTFmYjNlM2MxNmI4N2MxYTI1NDQiLCJpZCI6MTE2MDI0NCwiZW1haWwiOiI5Nzk1ODE0OTFAcXEuY29tIiwidXNlcm5hbWUiOiJjaGF4aW5nc2h1byIsInVzZXJfc2x1ZyI6ImNoYXhpbmdzaHVvIiwiYXZhdGFyIjoiaHR0cHM6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hY2I3ZmQzMGQ2NzJhYWNkMzIxOWRkNDliODkwMjQwOC5wbmc_cz0yMDAiLCJ0aW1lc3RhbXAiOiIyMDE4LTA4LTI5IDE3OjI0OjQ3Ljc1NzgzMCswMDowMCIsIlJFTU9URV9BRERSIjoiMjAwMTpkYTg6NzAxMzo5MDIxOmMwMDc6ZjNlZjo2MThmOmNiOWQiLCJJREVOVElUWSI6ImRlZmJlYTI4MjU2ZmJkNDAwNjBiNzQ1NTQyZGI4ODM2IiwiX3Nlc3Npb25fZXhwaXJ5IjoxMjA5NjAwfQ.LF7GII7764vx-MhE6fqU3YKeTf60SH3_Nbov3Ebo6c0'
    ,domain='leetcode.com')
url = 'https://leetcode.com/api/problems/all'
r = requests.get(url,cookies = cookie)
print(r.text)
'''
#利用上述方法伪造已经登录的LEETCODE_SESSION,可跳过获取cookies,模拟登陆环节！SESSION劫持！非常强大！！！
#缺点是必须伪造已经登录的LEETCODE_SESSION



def getcookies():        #获得登录leetcode的秘钥
    url = 'https://leetcode.com'
    r = requests.get(url)
    cookies = r.cookies

    csrftoken = ''
    for cookie in cookies:
        csrftoken = cookie.value
    return csrftoken
def login(csrftoken):     #登录leetcode
    data = {'csrfmiddlewaretoken':csrftoken,'login':'979581491@qq.com','password':'260074','remember':'on'}

    headers = {'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0',
            'Referer':'https://leetcode.com/accounts/login/',
            'Origin':'https://leetcode.com'}

    url = 'https://leetcode.com/accounts/login/'
    r = requests.post(url,data = data,headers = headers)

def getsolveproblems():      #获得问题列表
    url = 'https://leetcode.com/api/problems/all'

    r = requests.get(url)

    t =r.text

    t = re.search('"stat_status_pairs": (.*), "frequency_high": 0, "frequency_mid": 0',t).group(1)
    t = t[1:len(t)-1]
    
    t = re.findall('{"stat": (.*?"progress": \d})',t)
    with open('allquestions.txt','w')as f:
        for i in t:
            f.write(i+'\n')
            print(i)
    solved = []
    level = []
    ids = []
    questions = open('allquestions.txt','r')
    for question in questions:
        if '"status": "ac"' in question:
            n = re.search('"question__title_slug": "(.*?)"',question).group(1)
            l = re.search('"difficulty": {"level": (\d?)}',question).group(1)
            id = re.search('"question_id": (\d+?),',question).group(1)
            if n not in solved:
                solved.append(n)
                level.append(l)
                ids.append(id)
    return solved,level,ids
 

def getsuburl(question):      #获得每个问题的最优提交网址
    #print('正在提取'+question)
    url = 'https://leetcode.com/api/submissions/'+question+'?offset=0&limit=50&lastkey='
    t = requests.get(url).text
    t = re.search('{"submissions_dump":(.*)],',t).group(1)
    t = t[1:len(t)]
    t = re.findall('{"lang":.*?"title":.*?}',t)
    for i in t:
        with open('submit.txt','a') as f:
            f.write(i+'\n')
    
    url = ''
    lang = ''
    rt = 9999
    for line in t:
        if '"status_display":"Accepted"' in line:
            thisrt = int(re.search('"runtime":"(\d+?) ms"',line).group(1))
            if thisrt < rt:
                rt = thisrt
                url='https://leetcode.com'+re.search('"url":"(.*?)",',line).group(1)
                lang = re.search('"lang":"(.*?)"',line).group(1)
    return url,lang,rt


def getcode(url,lang,question,difficulty,id):
    ldict = {'cpp':'cpp','javascript':'js','python':'py','py':'py'}
    ddict = {'1':'easy','2':'middle','3':'hard'}
    t = requests.get(url).text
    t = re.search("submissionCode: '(.*?)',\n",t).group(1)
    t = t.replace(r"\u003D",'=',)  #字符串前r表示原始字符，无转义！不加r会转义，无法替换！
    t = t.replace(r"\u000A",'\n')
    t = t.replace(r"\u003B",';')
    t = t.replace(r"\u003C",'<')
    t = t.replace(r"\u003E",'>')
    t = t.replace(r"\u002D",'-')
    t = t.replace(r"\u0026",'&')
    t = t.replace(r"\u0027",'\'')
    t = t.replace(r"\u0009",'\t')
    t = t.replace(r"\u0022",'\"')
    with open('./codes/'+id+'-'+question+'.'+ldict[lang],'w') as f:
        f.write('/*author     :      cedricxs\n *level      :      '+ddict[difficulty]+
                  '\n */\n')
        f.write(t)
  
def main():
    csrftoken = getcookies()
    login(csrftoken)
    solved,level,ids = getsolveproblems()
    for question,difficulty,id in zip(solved,level,ids):
        url,lang,rt = getsuburl(question)
        getcode(url,lang,question,difficulty,id)
        print('["question_id":{} "question__title:{} "difficulty":{} run_time: {}ms]'.
        format(id,question,difficulty,rt))
if __name__ == '__main__':
    main()