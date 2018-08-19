#font_path 指定字体文件的完整路径,默认None
#width 生成图片宽度,默认400像素
#height 生成图片高度,默认200像素
#mask 词云形状,默认None,即,方形图
#min_font_size 词云中最小的字体字号,默认4号
#font_step 字号步进间隔,默认1
#min_font_size 词云中最大的字体字号,默认None,根据高度自动调节
#max_words 词云图中最大词数,默认200
#stopwords 被排除词列表,排除词不在词云中显示
#background_color 图片背景颜色,默认黑色
#generate(text) 由text文本生成词云
#to_file(filename) 将词云图保存为名为filename的文件
import jieba
import time
from wordcloud import WordCloud
from scipy.misc import imread
start = time.perf_counter()
w = WordCloud().generate('I am cedricxs')
w.to_file('testcloud.png')
txt = '程序设计语言是计算机能够理解和识别用户操作意图的一种交互体系,它按\
照特定规则组织计算机指令,使计算机能够自动进行各种运算处理。'
words = jieba.lcut(txt)
newtxt = ' '.join(words)
wordcloud = WordCloud(font_path='msyh.TTF').generate(newtxt)
wordcloud.to_file('词云中文例子图.png')
end = time.perf_counter()
print(end-start)
f = imread('e.png')
w = WordCloud(background_color="white", width=800, height=600,
 max_words=200, max_font_size=80,mask=f)
with open('text.txt','r') as file:
    t = file.read()
    w.generate(t)
    w.to_file('text.png')