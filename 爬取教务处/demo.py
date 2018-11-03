import bs4
import requests

requests = requests.Session()

url = 'http://localhost:8888/api/user/login'
header = {'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0'}

r = requests.post(url,headers = header,data = {'username':'cedricxs','password':'123'})
r.encoding = r.apparent_encoding

print(r.cookies.items())
