# -*- coding: utf-8 -*- 

url = "http://naver.com"
my_str = url.replace("http://", "")
my_str = my_str[:my_str.index(".")] 
#my_str[0:5] 0~5직전까지
print(my_str)

