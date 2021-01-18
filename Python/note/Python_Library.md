# Python Library



## Re

정규 표현식 (Regular Expression)

:  특정한 규칙을 가진 문자열의 패턴을 표현하는 데 사용하는 표현식 

```python
import re
text = "문의사항이 있으면 032-232-3245 으로 연락주시기 바랍니다."
regex =re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
matchobj = regex.search(text)
phonenumber = matchobj.group()
print(phonenumber)  
```

```python
import re
text ="에러 1122 : 레퍼런스 오류\n 에러 1033: 아규먼트 오류"
regex =re.compile("에러\s\d+")
mc =regex.findall(text)
print(mc)
# 출력: ['에러 1122', '에러 1033']
```

## combinations

- 조합에 사용되는 메소드 
- 한 리스트에서 중복을 허용하지않고 모든 경우의 수를 구하는 것

```python
from itertools import combinations

_list=[1,2,3]
combi=list(combinations(_list, 2))	# [(1,2), (1,3), (2,3)]

for i in range(1, len(_list)+1):
  print(list(combinations(_list, i)))
  # [(1, ), (2, ), (3, )]
  # [(1,2), (1,3), (2,3)]
  # [(1,2,3)]
```

</br>

## permutations

- 순열에 사용되는 메소드
- 한 리스트에서 중복을 허용하고 모든 경우의 수를 구하는 것

```python
from itertools import permutations

_list=[1,2,3]
perm=list(permutations(_list, 2))
print(perm)		# [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]
```

</br>

## product

- 데카르트 곱(Cartesian product) 표현할 때 사용하는 메소드 

  	= DB의 Join, 관계 대수의 product 생각해라.

- 두 개 이상의 리스트의 모든 조합을 구할 때 사용함

```python
from itertools import product
_list = ['012', 'abc', '!@#']
pd=list(product(*_list))
print(pd)		# [('0', 'a', '!'), ('0', 'a', '@'), ('0', 'a', '#'), ('0', 'b', '!'), ... , ('2', 'c', '#')]
```