import pandas
from sklearn import tree
import sklearn
import mca2
import matplotlib.pyplot as plt

df = pandas.read_csv("E:\\workspace_py\\extraction connaissance de donner\\german.data",sep="\t")
# Accès à une ligne : df.iloc[i,:] ou df.iloc[i]
# (iloc pour localiser à partir d'un indice, càd numéro de colonne ou ligne)
#print(df.dtypes,df.shape)
#print(df.count(),df.describe())
#print(df.index,df.columns)
# print(type(df.iloc))
#print(df.iloc[0,0])
#print(df['duration'])
#print(df.duration.plot.hist())
#df['purpose'].value_counts().plot.pie(figsize=[5,5])

#对缺失值处理并转为成高纬度的二值变量
dfbin = mca2.dummy(df.iloc[:,:20])
print(dfbin.shape)
machine = mca2.mca(dfbin,benzecri=False)
#利用pca降维至61
acp = machine.fs_r(N=61)

print(type(acp))
print(acp.shape)
clf = tree.DecisionTreeClassifier(max_depth=3)
clf.fit(acp,df['class'])
tree.plot_tree(clf)
plt.show()
print(clf)

#对于不同hyperparametre(max_depth)的决策树模型进行p评估
#评估方式分为validation simple,即只取一次验证集进行验证,多次validation simple取平均可以达到交叉验证的效果
#validation croisee,交叉验证,即多次分割验证集训练集,以达到对模型效果的平均估计
scores = []
for depth in range(1,10):
    score = sklearn.model_selection.cross_val_score(tree.DecisionTreeClassifier(max_depth=depth),acp,df['class'],cv=10)
    print(score)
    scores.append(sum(score)/len(score))
print(scores)