#Beautiful Soup将复杂HTML文档转换成一个复杂的树形结构,每个节点都是Python对象,所有对象可以归纳为4种:
#    Tag  .contents属性可以将tag的子节点以列表的方式输出  .children它返回的不是一个 list，不过我们可以通过遍历获取所有子节点,为生成器对象。
#    NavigableString       tag.string　tag.strings　获取多个内容，不过需要遍历获取，生成器对象
#    BeautifulSoup 
#    Comment
#对于 Tag，它有两个重要的属性，是 name 和 attrs  tag.attrs[attrsname] == tag[attrsname]
#
#html.find(tagname)只会返回找到的第一个
# #find_all() 方法搜索当前tag的所有tag子节点,并判断是否符合过滤器的条件
#ccs选择器同样html.select('div .listinfo')
import requests
import bs4

def getHTMLtext(url):
    try:
        headers = {'User-Agent':'Mozilla/5.0'}
        r = requests.get(url,headers = headers,timeout=5)
        r.encoding = r.apparent_encoding 
        soup = bs4.BeautifulSoup(r.text,"html.parser")
        return soup
    except:
        return 

def exname(string):
    name = ''
    isname = False
    for i in range(len(string)):
        if string[i]=='《':
            isname = True
            continue
        if string[i]=='》':
            break
        if isname == True:
            name+=string[i]
    return name
def showres(pan):
    print('{0:<15}{1:^50}\t\t{2:<10}'.format('电影名称','网盘链接','提取密码'))
    s = 0
    for key in pan:
        s+=1
        print('{0:<15}\t{1:<50}\t{2:>10}'.format(key,pan[key][0],pan[key][1]))
    print('总共成功提取{}个电影资源!'.format(s))
def main():
    hrefs = []
    panbaidu = {}
    for i in range(1,10,1):
        url = 'http://www.6vhao.tv/dy1/index_{}.html'.format(i)
        html = getHTMLtext(url)
        lis = html.find_all('div',{'class':"listInfo"})
        for li in lis:
            hrefs.append(li.a.attrs['href'])
            panbaidu[li.a.attrs['title']] = []
    if len(hrefs) == 0:
        print('网络连接错误!')
        return
    for i,href in zip(range(len(hrefs)),hrefs):
        print('正在试图提取第{}个电影资源...'.format(i+1))
        soup = getHTMLtext(href)
        if soup != None:
            name = exname(soup.find('title').string)
            tds = soup.find_all('td',{'bgcolor':'#ffffbb'})
            for td in tds:
                istar,isvalid = False,False
                for string in td.strings:
                    if string =='网盘链接：':
                        istar = True
                    if istar == False:
                        break
                    if 'http' in string:
                        s = 'https://pan.baidu.com/share/init?surl='+string.split('/')[-1][1:]
                        try:
                            t = getHTMLtext(s).find('title').string
                            if t != '页面不存在':
                                panbaidu[name].append(string)
                                isvalid = True
                            else:
                                print('第{}个电影资源链接已失效!'.format(i+1))
                                break
                        except:
                            pass
                    if '密码' in string and isvalid:
                        panbaidu[name].append(string.split('：')[1])
            if panbaidu[name]==[]:
                print('第{}个电影资源提取失败!'.format(i+1))
                del panbaidu[name]
            else:
                print('第{}个电影资源提取成功!'.format(i+1))
    showres(panbaidu)
if __name__ == '__main__':
    main()