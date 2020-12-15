# Python 

### 내장 자료 구조 - Tuple

- list와 거의 비슷하지만 변경 불가능(Immutable)한 특성을 가지고 있음
- 다만, tuple은 list보다 속도가 빠르다.
- 값을 가져올 수 있되 추가, 수정, 삭제 불가능
  - 슬라이스와 인덱싱 등은 지원을 하지만 append, pop, remove등은 지원하지 않음.

#### list : nuber = [1,2,3] | tuple : number=(1,2,3)



### 파이썬 사전 - Dict(사전형)

- key와 value의 쌍으로 구성된 집합
- key는 고유값이며 중복을 허용하지 않음
- 중괄호{ } 내에 콜론(:)으로 key/value를 구분
  - example = {'a' : 10, 'b' : 20, 'c' : 30}
- 사전 형태의 값으로 체크 X, but, 키로 체크 0
  - print(10 in example) -> false
  - print('a' in example) -> true
- 값 변경
  - example['a'] = 90
- 값 삭제
  - del example['a']











