#content中间存的是字节码，而text中存的是Beautifulsoup根据猜测的编码方式将content内容编码成字符串。

import requests
import bs4

def getHTMLtext(url):
    try:
        r = requests.get(url,timeout=5)
        r.raise_for_status()
        r.encoding = r.apparent_encoding 
        return r.text
    except:
        return ""

def fillUnivList(ulist,html):
    soup = bs4.BeautifulSoup(html,"html.parser")
    for tr in soup.find('tbody').children:
        if type(tr)==bs4.element.Tag:
            tds = tr('td')
            ulist.append([tds[0].string,tds[1].string,tds[3].string])
    
    

def printUnivList(ulist,num):
    print("{:^10}\t{:^6}\t{:^10}".format("排名","学校名称","总分"))
    for i in range(num):
        u=ulist[i]
        print("{:^10}\t{:^6}\t{:^10}".format(u[0],u[1],u[2]))

def main():
    uinfo = []
    url = 'http://www.zuihaodaxue.cn/zuihaodaxuepaiming2016.html'
    html = getHTMLtext(url)
    fillUnivList(uinfo,html)
    printUnivList(uinfo,10)
main()