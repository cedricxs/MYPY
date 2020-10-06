import re

def find_postion(note,notes):
    i = 1
    for n in notes:
        if n > note :
            i = i+1
        else:
            break
    return i
notes_actual = {}
with open('scolarite.html','r',encoding='utf-8') as file:
    content = file.read()
    #print(content)
    allnotes = re.findall(r'<addhelp(.*?)</addhelp>',content)
    i = 0
    for notes_one in allnotes:
        myNote = re.findall(r'setNote\((.*?)\);',notes_one)
#        print(myNote)
        if len(myNote) != 0:
            if len(myNote[0]) != 0:
                i = i+1
                myNote = float(myNote[0])
                notes = re.findall(r'setValues\(\[(.*?)\]\)',notes_one)[0].split(',')
                notes = list(map(eval, notes))
                notes = sorted(notes,reverse=True)
                rank = find_postion(myNote,notes)
                print('我的成绩:'+str(myNote))
                print("总人数:"+str(len(notes)))
                print("我的排名:"+str(rank))
                print("我是前："+str(rank/len(notes)))
                print("成绩:"+str(notes))
    print("共计"+str(i)+"门科目")

