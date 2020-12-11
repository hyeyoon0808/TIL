# -*- coding: utf-8 -*- 

sentence = "나는 소년입니다"
print(sentence)
sentence2 = "파이썬은 쉬워요"
print(sentence2)
sentence3 = """
나는 소년이고, 
파이선은 쉬워요
"""
print(sentence3)

#문자열 처리 함수
python = "Python is amazing"
print(python.lower())
print(python.upper())
print(python[0].isupper()) # true
print(len(python))
print(python.replace("Python", "Java"))

index = python.index("n")
print(index)
index = python.index("n", index +1)
print(index)

print(python.find("Java")) #없을땐 -1
# print(python.index("Java")) #없을땐 오류

print(python.count("n")) #n이 몇개인지 세어주기

##문자열 포멧
#방법1
print("나는 %d살입니다" % 20)
print("나는 %s을 좋아해요" %"파이선")
print("Apple은 %c로 시작해요" %"A")
print("I like %s and %s" % ("blue", "red"))

#방법2
print("I am {}" .format(20))
print("I like {} and {}" .format("blue", "red"))
print("I like {1} and {0}" .format("blue", "red")) #1 번째 앞에 0번째 뒤어

#방법3
print("I am {age}, I like {color}".format(age=20, color="red"))

#방법4
# age = 20
# color = "빨간"
# print(f"I am {age}, I like {color}.") #f써준 경우 앞의 변수 사용할수 있음

#탈출문자 1.09.26