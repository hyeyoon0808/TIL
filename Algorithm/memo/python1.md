# Python

## 암호를 해독해라!

```python
In [1]: text = ['  + -- + - + -  ',
                '  + --- + - +  ',
                '  + -- + - + -  ',	
                '  + - + - + - +  ']

In [6]: for i in text: 
				print(int(i.strip().replace(' ', '').replace('+', '1').replace('-','0').2));
      //strip:앞뒤빈칸 지우기, replace:앞자 뒷자로 바꾸기
      // 2:자동으로 이진법으로 바꿔줌
        
=> 1001010 => 74
	 1000101 => 69
   1001010 => 74
   1010101 => 85
      
#ord(): 문자 -> 숫자
#chr(): 숫자 -> 문자
In[9]: 
    l = []
    for i in text: 
            l.append(chr(i.strip().replace(' ', '').replace('+', 							'1').replace('-','0').2));

 => in[11]: ''.join(l)
 => out[11]: 'JEJU'
  
  
In[28]: def f(x):
    				return chr(int(x, 2))
    		list(map(f, s))
Out[28]: ['J', 'E', 'J', 'U']
  
  
In[12]: [chr(i.strip().replace(' ', '').
             replace('+','1').replace('-','0').2) for i in text]
Out[12]:['J', 'E', 'J', 'U']
  

In[13]:''.join([chr(i.strip().replace(' ', '').
             replace('+','1').replace('-','0').2) for i in text])
Out[13]: 'JEJU'
  
  
In[15]: [i for i in range(10) if i%2 ==0]
Out[15]: [0, 2, 4, 6, 8]
  
  
In[17]: [f'{i}*{j}={i*j}' for i in range(2, 10) for j in range(1,10)]
  //for와 for는 병렬관계가 아님 두번째 for는 첫번째 for에 속해여 있음.
Out[17]: ['2*1 = 2',
          '2*2 = 4',
          ...
  				'10*10 = 100']
  
  
In[20]: '111'.zfill(10) //10자리 숫자 채우기
Out[20]: '0000000111'
  
 
```







