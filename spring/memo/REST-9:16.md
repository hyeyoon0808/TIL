# boot

**2020.September.16**

 

## axios & ReactiveX





## Logging

trace, debug, Info, warn, error

spring.devtools.restart.enable=true -> dev tools 용

spring.devtools.restart.enable=false -> 운영이나 배포할때 꼭 끄기!!

 

```java
public interface AccountRepository extends JpaRepository<Account, Long>{
	Account findByUsername(String username);
}
```



## Arrow function(Lambda 식)

* Javascript에서 Lambda식

```javascript
function sayHello(msg){
  return 'Hello ' + msg;
}
console.log(sayHello('lambda'));

//arrow function, lambda expression
let sayHello2 = msg => 'Hello '+msg;
console.log(sayHello2('람다'));
```



* 



## Spring Boot

1. JPA + Web MVC

   : REST

   : Thymeleaf

2. Boot + MyBatis 연동 어떻게 하는지?

3. JPA 심화 (one2one, one2many, many2many)

4. Actuator (모니터링)

5. Basic 인증처리





## Annotation

* @RequestMapping	- HTTP 요청을 처리할 매소드를 매핑해줌

- 클래스, 매소드 위에 사용 가능
@GetMapping	- Get 요청을 처리 할 매소드를 매핑
- @RequestBody와 같은 역할이지만 매소드 위에만 사용 가능







