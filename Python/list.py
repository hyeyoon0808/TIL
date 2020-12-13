# -*- coding: utf-8 -*- 

# 리스트 []

subway = [10, 20, 30]
print(subway)

#몇번째?
print(subway.index(20))

# 다음 칸에 추가
subway.append(40)
print(subway)

# 중간에 15 추가
subway.insert(1, 15)
print(subway)

# 꺼내기
print(subway.pop()) #맨 뒷 숫자 꺼내짐
print(subway)

# 정력하기
num_list = [5,3,1,7]
num_list.sort()
print(num_list)

# 순서 뒤집기 기능
num_list.reverse()
print(num_list)

# 모두 지우기
# num_list.clear()
# print(num_list)

# 다양한 자료형 함께 사용
mix_list = ["hyeyoon", 3, True]
print(mix_list)

# 리스트 확장
num_list.extend(mix_list)
print(num_list)