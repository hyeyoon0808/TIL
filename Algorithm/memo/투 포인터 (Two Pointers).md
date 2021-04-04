# 투 포인터 (Two Pointers)

투 포인터 알고리즘은 리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘을 의미

- 리스트에 담긴 데이터에 순차적으로 접근해야 할 때의 시작점과 끝점 2개의 점으로 접근할 데이터의 범위를 표현



e.g.

[1,2,3,2,5]

이때, 합계 값이 5라고 설정하면 

1. [1,(2),(3),2,5]
2. [1,2,(3),(2),5]
3. [1,2,3,2,(5)]

[풀이]

1. 시작점과 끝점이 첫번째 원소의 인덱스를 가리키도록 한다.
2. 현재 부분합이 M과 같다면 카운트한다.
3. 현재 부분합이 M보다 작으면 end를 1 증가시킨다.
4. 현재 부분합이 M보다 크거나 같으면 start를 1 증가시킨다.
5. 모든 경우를 확인할 때까지 2번부터 4번까지의 과정을 반복한다.



```python
n = 5 
# 찾고자 하는 부분합 M
m = 5
# 전체 수열
data = [4, 3, 1, 2, 5]

count = 0
interval_sum = 0
end = 0

# start를 차례대로 증가시키며 반복
for start in range(n):
    # end를 가능한 만큼 이동시키기
    while interval_sum < m and end < n:
        interval_sum += data[end]
        end += 1
        
    if interval_sum == m:
        count += 1
    interval_sum -= data[start]

print(count) # 출력: 3
```

