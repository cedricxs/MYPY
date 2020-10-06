# -*- coding: utf-8 -*-

"""
Module implementing MainWindow.
"""

from PyQt5.QtCore import pyqtSlot
from PyQt5.QtWidgets import QMainWindow, QApplication, QFileDialog
from Ui_test import Ui_MainWindow
from info import Info

class MainWindow(QMainWindow, Ui_MainWindow):
    """
    Class documentation goes here.
    """
    def __init__(self, parent=None):
        """
        Constructor
        
        @param parent reference to the parent widget
        @type QWidget
        """
        super(MainWindow, self).__init__(parent)
        self.setupUi(self)
        self.info = Info()
        
    @pyqtSlot()
    #the function running
    def on_pushButton_2_clicked(self):
        """
        Slot documentation goes here.
        """
        # TODO: not implemented yet
        self.info.setPath(self.lineEdit.text())
        from script import Changer
        changer = Changer()
        #import script
        #changer = script.Changer()
        changer.setattr(self.info.header, self.info.size, self.info.font)

        changer.run( self.info.path, self.textBrowser)
        self.textBrowser.append('修改完毕,共修改{0}个文件,请检查'.format(changer.count))
    
    @pyqtSlot(str)
    def on_comboBox_activated(self, p0):
        """
        Slot documentation goes here.
        
        @param p0 DESCRIPTION
        @type str
        """
        # TODO: not implemented yet
        self.info.setfont(p0)
    
    @pyqtSlot(str)
    def on_comboBox_2_activated(self, p0):
        """
        Slot documentation goes here.
        
        @param p0 DESCRIPTION
        @type str
        """
        # TODO: not implemented yet
        p = p0.split('-')
        size = int(p[1])
        self.info.setsize(size)
        print(self.info.size)
    
    @pyqtSlot()
    def on_lineEdit_2_editingFinished(self):
        """
        Slot documentation goes here.
        """
        # TODO: not implemented yet
        self.info.setheader(self.lineEdit_2.text())
    
    @pyqtSlot()
    def on_pushButton_clicked(self):
        """
        Slot documentation goes here.
        """
        # TODO: not implemented yet
        path = QFileDialog.getExistingDirectory(self, ("Open Directory"), '../', QFileDialog.ShowDirsOnly| QFileDialog.DontResolveSymlinks)
        #print(path)
        self.lineEdit.setText(path)
    
def main():
    import sys
    app = QApplication(sys.argv)
    mainWindow = MainWindow()
    mainWindow.show()
    sys.exit(app.exec_())
if __name__ == "__main__":
    main()
    
