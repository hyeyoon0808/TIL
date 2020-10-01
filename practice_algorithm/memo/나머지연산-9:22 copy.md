#  수학1

**2020.September.25**



## 나머지 연산

(A+B) % M = ((A%M) + (B%M)) % M





## 최대공약수

* 두 자연수 a,b (a>b)가 있고, a를 b로 나눴을 때 나머지를 r이라 하면, gcd(a,b)=gcd(b,r) 이다.
  * gcd(46,10)->gcd(10,6)->gcd(6,4)->gcd(4,2)->gcd(2,0) ->최대공약수는 2

```java
int gcd(int a, int b){
	int(b==0){
    return a;
  }else{
    return gcd(b, a%b);
  }
}
```

​	

## 최소공배수

A*B =최대공약수 * 최소공배수

최소공배수 = (A*B) / 최대공약수





## 소수

* 어떤 수 N이 소수인지 아닌지 판별하는 방법
* N보다 작거나 같은 모든 자연수 중에서 소수를 찾아내는 방법
* N이 소수가 되려면, 2보다 크거나 같고, N/2보다 작거나 같은 자연수로 나누어 떨어지면 안된다.

```java
bool prime (int n){
  if(n < 2){
    return false;
  }
  for(int i=2; i<=n/2; i++){ //i<=n-1
    if(n % i ==0){
      return false;
    }
  }
  return true;
}
```



* N=a*b
  * a<b
  * a, b의 차이가 가장 작은 경우는 루트 N이다.

```java
bool prime (int n){
  if(n < 2){
    return false;
  }
  for(int i=2; i*i<=n; i++){ 
    if(n % i ==0){
      return false;
    }
  }
  return true;
}
```



- 에라토스테네스의 체
  - 6n+1, 6n+5는 소수

```java
int prime[100]; //소수 저장
int pn=0; //소수의 개수
bool check[101]; //지워졌으면 true
int n=100; //100까지 소수
for(int i=2; i<=n; i++){
  if(check[i]==false){ //지워지지 않았을때 -> 9 =3*3 -> 9는 지워져서 true
    prime[pn++] = i;
    for(int j=i+i; j<=n; j+=i){ //9,12,15,18,21,24
      check[j]=true;
    }
  }
}
```



* 팩토리얼
  * N!=1 * 2 * ... * N
  * 의 0이 몇개 인지 알아내는 문제