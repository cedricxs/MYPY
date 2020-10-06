
from win32com import client as wc
def copy(src,des):
    w = wc.Dispatch('Word.Application')
    # 或者使用下面的方法，使用启动独立的进程：
    # w = wc.DispatchEx('Word.Application')
    doc=w.Documents.Open(src)
    doc.SaveAs(des,16)#必须有参数16，否则会出错.
    
src = r"C:\Users\97958\Desktop\test\2兽药GMP检查验收申请.doc"
des = r"C:\Users\97958\Desktop\changed\2兽药GMP检查验收申请.docx"
#copy(src,des)

import changer_test as c
changer = c.Changer()
changer.Usage()
