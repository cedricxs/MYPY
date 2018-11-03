import bs4
import requests
import time
import execjs
#保持登录状态
#也可SESSION劫持登录
request = requests.Session()

def gethomepage():
    url = 'http://jwgl.ouc.edu.cn/cas/login.action'
    r = request.get(url)
    r.encoding = r.apparent_encoding
    print(r.status_code)
    return r

def getindex_js(r):
    soup = bs4.BeautifulSoup(r.text,'html.parser')
    srcs = soup.find_all('script')
    for src in srcs:
        try:
            js = src.attrs['src']
            print(js)
            if 'http' in js:
                j = requests.get(js)
                j.encoding = j.apparent_encoding
                with open(js.split('/')[-1],'w') as jsfile:
                    jsfile.write(j.text) 
        except:
            pass

def getSetKingo():
    s = requests.get('http://jwgl.ouc.edu.cn:80/custom/js/SetKingoEncypt.jsp')
    t = s.text.split('\r')
    with open('./爬取教务处/root.js','a') as jsfile:
        for line in t:
            if 'document' not in line:
                jsfile.write(line)

#def getrandnumber():
#    t = time.localtime()
#    http://jwgl.ouc.edu.cn/cas/genValidateCode?dateTime=Wed Aug 22 2018 14:15:33 GMT+0800 (CST)
#    date = time.strftime('%a %b %d %Y %H:%M:%S',t)+' GMT+0800 (CST)'
#    print(date)
#    url = 'http://jwgl.ouc.edu.cn/cas/genValidateCode?dateTime='+date
#    img = sess.get(url)
#    img = img.content
#    with open('randnumber.jpeg','wb') as rand:
#        rand.write(img)
#    
def getparams(sessionid):
    randnumber = ''
    username = execjs.compile(open('./爬取教务处//root.js','r').read()).call('getusername',sessionid)
    print(username)
    params = {}
    params['_u'+randnumber] = username
    params['_p'+randnumber] = 'e24f6ce12d7f78484513388480311548'
    params['randnumber'] = randnumber
    params['isPasswordPolicy'] = '1'
    return params

def login(params):
    headers = {'Referer':'http://jwgl.ouc.edu.cn/cas/login.action',
    'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0'}
    url = 'http://jwgl.ouc.edu.cn/cas/logon.action'
    r = request.post(url,data = params)
    return r

def getmyself():
    #声明Referer　不声明会被反爬
    headers = {'Referer':'http://jwgl.ouc.edu.cn/student/xkjg.wdkb.jsp?menucode=JW130416'}
    url = 'http://jwgl.ouc.edu.cn/wsxk/xkjg.ckdgxsxdkchj_data.jsp?params=eG49MjAxNiZ4cT0yJnhoPTE1MDIwMDIyMDAz'
    res = request.post(url,headers = headers)
#    soup = bs4.BeautifulSoup(res.text,'html.parser')
    with open('课表.html','w') as f:
        t = res.text
        f.write(t)

def choice(clist,i,string):
    if string == 'None':
        clist[i] = clist[i]
    else:
        clist[i] = string

def getallclass(page,classinfo):
    headers = {'Referer':'http://jwgl.ouc.edu.cn/taglib/DataTable.jsp?tableId=6146',
    'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0'}
    url = 'http://jwgl.ouc.edu.cn/taglib/DataTable.jsp?currPageCount={}'.format(page)
    param = {'initQry':'0','kcfw':classinfo,'nj':'2015','sel_schoolarea':'2','xh':'15020022003',
             'xktype':'2','xn':'2018','xnxq':'2018-1','xq':'1','zydm':'0009','tableId':'6146'}
    res = request.post(url,data = param ,headers = headers)
    res.encoding = res.apparent_encoding
    print(res.encoding)
#    print(res.text)
    #classdict = {'cno':'','cname':'','carea':'','cteacher':'','cweek':'','cscore':'','ctime':'',
    #             'croom':'','cnote':''}
    classdict = ['' for i in range(9)]
    soup = bs4.BeautifulSoup(res.text,'html.parser')
    classes = soup.tbody.find_all('tr')#classes ==> trs
    with open(classinfo+'.html','a') as f:
        for cours in classes:#cours ==> tr
            temp = ['' for i in range(9)]
            temp[0] = str(cours.find('td',{'name' : 'curent_skbjdm'}).string) 
            kc = cours.find('td',{'name' : 'kc'})
            if kc.a != None:
                temp[1] = str(kc.a.string)
            else:
                temp[1] = 'None'
            temp[2] = str(cours.find('td',{'name' : 'xqmc'}).string)
            temp[3] = str(cours.find('td',{'name' : 'rkjs'}).string)
            temp[4] = str(cours.find('td',{'name' : 'qsz'}).string)
            temp[5] = str(cours.find('td',{'name' : 'xf'}).string)
            temp[6] = str(cours.find('td',{'name' : 'sksj'}).string)
            temp[7] = str(cours.find('td',{'name' : 'skdd'}).string)
            temp[8] = str(cours.find('td',{'name' : 'bz'}).string)
            for i in range(9):
                choice(classdict,i,temp[i])
            f.write(' '.join(classdict))
            f.write('\n')

def getgrade():
    headers = {'Host': 'jwgl.ouc.edu.cn',
                'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-GB,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate',
                'Referer': 'http://jwgl.ouc.edu.cn/student/xscj.stuckcj.jsp?menucode=JW130705',
                'Cookie': 'JSESSIONID=2AD3061170B5987B8D5FF0D010734529.kingo',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'}
    param = 'xn=2018&xn1=2019&xq=0&ysyx=yscj&sjxz=sjxz1&userCode=15020022003&ysyxS=on&sjxzS=on'
    p = execjs.compile(open('./爬取教务处/root.js','r').read()).call('getEncParams',param)
    url = 'http://jwgl.ouc.edu.cn/student/xscj.stuckcj_data.jsp?'+p
    print(url)
    r = requests.get(url,headers=headers)
    print(r.text)

#for i in range(1,13,1):
#    getallclass(i,'PublicBasic')
#for i in range(1,4,1):
#    getallclass(i,'Common')


res = gethomepage()
sessionid = res.cookies.values()[0]
print(sessionid)
#getrandnumber()

param = getparams(sessionid)
res = login(param)
print(res.text)

getSetKingo()

getgrade()

