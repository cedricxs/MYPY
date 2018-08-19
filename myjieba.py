#jieba.lcut(s)是最常用的中文分词函数,用于精准模式,即将字符串分割成等量的中文词组,返回结果是列表类型。
#jieba.lcut(s, cut_all = True)用于全模式,即将字符串的所有分词可能均列出来,返回结果是列表类型,冗余性最大。
#jieba.lcut_for_search(s)返回搜索引擎模式,该模式首先执行精确模式,然后再对其中长词进一步切分获得最终结果。
import jieba
jieba.lcut( "全国计算机等级考试")
jieba.lcut( "全国计算机等级考试",cut_all = True)
jieba.lcut_for_search("全国计算机等级考试")