from win32com import client as wc
import os
import shutil
class doc2docx:
    def __init__(self):
        pass
    def open(self):
        self.word = wc.Dispatch('Word.Application')
    def close(self):
        self.word.Quit()
    def go(self, src, dest):
        lists = os.listdir(src)
        for file in lists:
            p = src+'\\'+file
            d = dest+'\\'+file
            if os.path.isdir(p):
                if not os.path.exists(d):
                     os.mkdir(d)
                self.go(p, d)
                
            else:
                if 'doc' in p and 'docx' not in p:
                    self.open()
                    doc = self.word.Documents.Open(p)        # 目标路径下的文件
                    d = d.replace('doc', 'docx')
                    print(p, d)
                    doc.SaveAs(d, 12, False, "", True, "", False, False, False, False)  # 转化后路径下的文件    
                    doc.Close()
                    self.close()
                else:
                    shutil.copy(p, d)
#import shutil  
#shutil.rmtree('要清空的文件夹名')  
#os.mkdir('要清空的文件夹名') 
if __name__ == "__main__":
    doc2 = doc2docx()
    doc2.go(r'C:\Users\97958\Desktop\汇通修改文件夹\003设备管理。\设备记录\封面', r'C:\Users\97958\Desktop\changed\003设备管理。\设备记录\封面')
