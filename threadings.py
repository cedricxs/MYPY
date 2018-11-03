import requests
import threading
import time 

def get(url,i):
    s = time.perf_counter()
    res = requests.get(url)
    res.encoding = res.apparent_encoding
    res = res.text
    print(res+str(i))
    print(time.perf_counter()-s)

threading_list = []
url = 'http://www.baidu.com'
for i in range(10):
    th = threading.Thread(target = get,args=(url,i))
    threading_list.append(th)
    th.start()
for t in threading_list:
    t.join()

