# age = int(input("请输入你的年龄："))
# if age > 18:
#     print("大于十八可以办理")
# else:
#     print("小于十八不可以办理")
sheng_gao = int(input("请输入你的身高："))
ti_zhong =  int(input("请输入你的体重/kg："))
if sheng_gao >= 180 and ti_zhong <= 60:
    print("体重偏轻")
elif sheng_gao < 180 and ti_zhong > 60:
        print("体重偏重")
elif sheng_gao >= 180 and ti_zhong > 60:
    print("体重肥胖")
