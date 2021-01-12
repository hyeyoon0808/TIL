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

= 최대한 깊이

- 경로의 특징을 저장해둬야 하는 문제
  - ex) 각 정점에 숫자가 적혀있고 a부터 b까지 가는 경로를 구하는데 경로에 같은 숫자가 있으면 안 된다는 문제 등, 각각의 경로마다 특징을 저장해둬야 할 때
  - 검색 대상 그래프가 정말 크다면 DFS

```python
def bfs(graph, start_node):
  visit = list() # 방문했던 노드 목록
  queue = list() # 방문할 노드 목록
  
  queue.append(start_node) # 큐의 목록이 바닥날때까지 loop를 돌려준다.
  
  while queue: # 큐의 목록 바닥날때까지(더 이상 방문할 노드가 없을 때까지)loop를 돌림
    node = queue.pop(0) # 큐의 맨 앞에 있는 노드 꺼냄
    if node not in visit: # 해당 노드가 아직 방문 리스트에 없다면
      visit.append(node) # 방문리스트 추가
      queue.extend(graph[node]) # 해당 노드의 자식 노드들 큐에 추가
      
  return visit
```



## BFS(Breadth-first search)

= 가까운 노드부터 우선적으로 탐색하는 알고리즘

= 최단경로문제

=최대한 넓게

- 최단거리 구하는 문제
  - ex) 미로찾기 등 최단거리를 구해야 할 경우
  - 검색 대상의 규모가 크지 않고, 검색 시작 지점으로부터 원하는 대상이 별로 멀지 않다면 BFS

```python
def bfs(graph, start_node):
  visit = list() # 방문했던 노드 목록
  stack = list() # 방문할 노드 목록
  
  stack.append(start_node) # stack의 목록이 바닥날때까지 loop를 돌려준다.
  
  while stack: # stack의 목록 바닥날때까지(방문할 노드가 없을 때까지)loop를 돌림
    node = stack.pop() # stack의 맨 앞에 있는 노드 꺼냄
    if node not in visit: # 해당 노드가 아직 방문 리스트에 없다면
      visit.append(node) # 방문 리스트 추가
      stack.extend(graph[node]) # 해당 노드의 자식 노드들 큐에 추가
      
  return visit
```

- queue에서 stack으로 바뀜
- pop(0)을 하던 부분이 pop()으로 바뀜.
  - pop(0): 맨 앞에 있는 요소 가져옴 - **queue**
  - pop(): 맨 마지막에 있는 요소 가져옴. - **stack**



