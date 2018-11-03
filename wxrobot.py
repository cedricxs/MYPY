from wxpy import *
bot = Bot(cache_path=True) #保持登录状态
my_friend = bot.friends().search('亲爱的老父亲')[0] #填写你要聊天的对象的微信名称，注意不是你备注的，而是原本的名称
tuling = Tuling(api_key='**********************')
 
my_friend.send('123')
@bot.register(my_friend)
def reply_friend(msg):
    # tuling.do_reply(msg)
    print(msg) #打印出来朋友回你的信息
    if (msg.type!='Text'):
        ret = '[疑问][疑问]'
    else:
        print('@TuTu : {}'.format(tuling.do_reply(msg))) #打印出图灵回复的信息
    return ret
 
 
embed() #让程序保持运行
