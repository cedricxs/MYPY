# Python

## 有关python包

* 有关setup.py:<br>
    利用编写setup.py脚本打包自己写的包
    setup.py中执行setup(param),根据param生成包的有关信息
    在控制台执行python setup.py sdist打包生成zip(win)
    当用户下载zip工具包时，解压
    在控制台执行python setup.py install即可将工具包安装至python的Lib目录下
    即可import

* 有关包与import:<br>
    import可以在当前脚本中引入任意文件夹，会首先执行__init__.py
    引入的内容在__init__.py中编写
    同样，在根目录的__init__.py中引入其子文件夹，
    首先执行子文件夹下的__init__.py，
    由子文件夹下的__init__.py来决定引入子文件夹引入了什么内容
    测试可见changer_test/__init__.py
    
* 有关python引用目录:<br>
    可以引入sys,print(sys.path)查看当前python引用库目录
    另外在vscode中，F5运行当前脚本，其实是由如'''c:\Users\97958\.vscode\extensions\ms-python.python-2019.4.12954\pythonFiles\ptvsd_launcher.py'''
    引导执行的，而在运行时，会将上述路径(即vscode工作文件夹)添加到sys.path中，从而可以import当前文件夹下的包
