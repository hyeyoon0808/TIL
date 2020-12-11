# -*- coding: utf-8 -*- 

print(5)
print(-10)
print(3.14)
print('풍선')
print("ㅋ"*9)  

# 참/거짓
print( 5 < 10)
print(5 > 10)
print(not True)
print(not(5 > 10))

#변수
name = "연탄이"
animal = "강아지"
age = 4
hobby = "산책"
is_adult = age >= 3
#애완동물을 소개해 주세요~
print("우리집 "+animal+"의 이름은 "+name+"예요")
print(name+"는 "+str(age)+"살이며, "+hobby+"을 아주 좋아해요")
print(name, "는 ", age, "살이며, ", hobby, "을 아주 좋아해요")
print("연탄이는 어른일까요? "+str(is_adult))

# 연산
print(5*2) #10
print(2**3) #2^3 = 8
print(5%3) #나머지 = 2
print(5//3) # 몫 = 1
print(10//3) # 3
print(10 < 3) #false
print(3 ==3) #true
print(4==2) # false
print(3+4 ==7) # true

# 비교
print((3 > 0) and (3<5)) # true
print((3 > 0) & (3<5)) 
print((3 > 0) or (3 > 5)) # true
print((3 > 0) | (3 > 5))

# 수식
print(abs(-5)) #절대값 = 5
print(pow(4, 2)) # 4^2 = 4*4 = 16
print(max(5, 12)) #12
print(min(5, 12)) #5
print(round(3,14)) # 3
print(round(4.99)) #5

from math import *
print(floor(4.99)) #내림 = 4
print(ceil(3.14)) #올림 =4
print(sqrt(16)) # 제곱근 = 4