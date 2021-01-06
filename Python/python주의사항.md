# 이코테 강의 기록

## 2020 최신 출제 경향

1. 구현
2. BFS/DFS
3. 그리디
4. 정렬 & 다이나믹 프로그래밍
5. 최단경로 & 이진탐색
6. 그래프이론

.

## 주의사항

#### 1.  실수형을 저장하기 위해 4바이트, 혹은 8바이트의 고정된 크기의 메모리를 할당하므로, **컴퓨터 시스템은 실수 정보를 표현하는 정확도에 한계를 가집니다.**

- ex) 10진수 체계에서는 0.3과 0.6을 더한 값이 0.9로 정확히 떨어진다.
  - 하지만 2진수에서는 0.9를 정확히 표현할 수 있는 방법이 X
  - 컴퓨터는 최대한 0.9와 가깝게 표현하지만, 미세한 오차가 발생

-> **round()** 함수를 사용하여 정확히 출력

.

### 2. 여러 개의 데이터를 연속적으로 담아 처리하기 위해 사용하는 자료형

- ArrayList + STL vector (C++)
- 사용자 입장에서 C나 자바에서의 배열(Array)의 기능 및 연결 리스트와 유사한 기능 지원.
- 리스트 대신에 배열 혹은 테이블이라고 부르기도 함.

```python
# 뒤에서 첫 번째 원소 출력
print(a[-1])
```

.

### 3. 반복을 수행하되 반복을 위한 변수의 값을 무시하고자 할 때 언더바(_)를 자주 사용합니다.

```python
# i를 쓰지않고 5번 반복 출력
for _ in range(5):
  print("Hello World")
```

.

### 4. 함수와 람다 표현식

#### 함수

함수안에서 전역변수를 가져와 사용할때 global로 지정해줘야한다.

```python
a=10 #전역변수
def func():
  # global로 지정해줌으로써 바깥 a값 인식하여 더해줌
  # 없으면 0부터 시작
  global a
  a += 1 #지역변수
  print(A)
 
```

.

파이썬은 리턴을 한번에 반환 가능!!! = packing

```python
def operator(a, b):
  add_var = a+b
  subtract_var = a-b
  multiply_var = a*b
  divide_var = a/b
  return add_var, subtract_var, multiply_var, divide_var #한번에 반환 가능!!!

a, b, c, d = operator(7, 3)
print(a, b, c, d)
```

.

#### 람다 표현식

특정한 기능을 수행하는 함수를 한 줄에 작성할 수 있다는 점이 특징

- 유용하게 쓰이는 경우: 어떤 함수 자체를 받는 또 다른 함수가 있을때 유용하게 쓰임, 단순히 한번 사용하고 말 함수 같은 경우

```python
array = [('hong', 50), ('cho', 10), ('Koo', 74)]
def my_key(x):
  return x[1] #2번째 원소

print(sorted(array, key=my_key)) #정렬기준: key속성
print(sorted(array, key=lambda x: x[1])) #일회용 함수는 람다로 함수 구현
```

> 결과 => [('hong', 50), ('cho', 10), ('Koo', 74)]
>
> ​			[('hong', 50), ('cho', 10), ('Koo', 74)]

