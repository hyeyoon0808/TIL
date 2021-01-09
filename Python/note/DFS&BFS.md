# DFS & BFS

### 큐 구현 예제 (Python)

```python
from collections import deque

#큐(Queue) 구현을 위해 deque 라이브러리 사용
queue = deque()

# 삽입(5)-삽입(2)-삽입(3)-삽입(7--삭제()-삽입(1)-삽입(4)-삭제()
queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()

print(queue) #먼저 들어온 순서대로 출력
queue.reverse() #역순으로 바꾸기
print(queue) #나중에 들어온 원소부터 출력
```

실행결과

​	deque([3,7,1,4])

​	deque([4,1,7,3])

**queue를 사용할때 list가 아닌 deque를 사용하는게 좋다**

- popleft를 사용할때 시간복잡도가 더 유리



------

### 재귀함수 (Recursive Function)

**자기 자신을 다시 호출하는 함수**

- 재귀 함수의 종료 조건을 반드시 명시해야 함.

```python
def recursive_function(i):
  #100번째 호출을 했을 때 종료되도록 종료 조건 명시
  if i == 100:
    return
  print(i, '번째 재귀함수에서', i+1, '번째 재귀함수를 호출합니다.')
  recursive_function(i+1)
  print(i, '번째 재귀함수를 종료합니다.')
 
recursive_function(1)
```

- 유클리드 호제법

  - 두자연수 a, b에 대하여 a를 b로 나눈 나머지를 R이라 할때 a와 b의 최대공약수는 b와 R의 최대공약수와 같다.

  - GCD(192,162)

  - ```python
    def gcd(a, b):
      if a%b == 0:
        return b
      else:
        return gcd(b, a%b)
     print(gcd(192, 162))
    ```



------

## DFS(Depth-first search)

= 깊은 부분을 우선적으로 탐색하는 알고리즘

## BFS(Breadth-first search)

= 가까운 노드부터 우선적으로 탐색하는 알고리즘

= 최단경로문제

