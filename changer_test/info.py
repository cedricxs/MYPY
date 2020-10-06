class Info(object):
    def __init__(self):
        self.header = None
        self.path = None
        self.font = '宋体'
        self.size = 26
        
    def setheader(self, header):
        self.header = header
    
    def setPath(self, path):
        self.path = path

    
    def setfont(self, font):
        self.font = font
        
    def setsize(self, size):
        self.size = size
if __name__ == '__main__':
    import os
    from docx import Document
    root = r'C:\Users\97958\Desktop\changed'
    file = '01人员培训管理规程.doc'
    path = os.path.join(root,file)
    print(path)
    doc = Document(path)
