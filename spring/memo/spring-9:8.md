# **Spring**

**2020.September.07**

 

## 1)  Framework와 Library의 차이점

: 제어흐름의 주도권을 누가 가지고 있느냐?

: 라이브러리 – 개발자

: 프레임워크 – 프레임워크, 라이브러리적인 요소 가지고 있음

\-    개발자가 작성한 클래스를 역호출 하는 구조를 가진다.

\-    역호출 하는 이유

: infrastructural support, plubing, 기반구조

: byte code injection

: IoC (Inversion of Control) 제어의 역전

DI (Dependency Injection) : 의존성 주입

DL (Dependency Lookup) : 의존성 찾기

 

## 2)  DI

: Setter Injection

\-    Setter Method의 아규먼트로 의존하는 객체의 레퍼런스를 주입하는 방식

: Constructor Injection

\-    Constructor의 아규먼트로 의존하는 객체의 레퍼런스를 주입받는 방식

: Method Injection

\-    일반 메서드의 아규먼트로 의존하는 객체의 레퍼런스를 주입받는 방식

 

## 3)  Spring Bean Container 역할

: BeanFactory, ApplicationContext, GenericXmlApplicationContext

: getBean(id), getBean(id, ClassType)

 

## 4)  Configuration MetaData

: config/spring_beans.xml

 

```java
<beans>
  //객체 3개 생성
  <bean id="strPrinter" class="myspring.di.xml.SpringPrinter" />
	<bean id="conPrinter" class="myspring.di.xml.ConsolePrinter" />  <!—scope : singleton, prototype, request, session -->
	<bean id="hello" class="myspring.di.xml.Hello" scope="singleton" > 
    <!-- setName(new Spring("스프링")) -->
    <property name= "name" value="스프링" />
    	setPrinter(Printer printer), Printer p = new 			ConsolePrinter();
    <!-- setPrinter(new ConsolePrinter())-->
      <property name="printer" ref="conPrinter" />
	</bean>
<beans>
```

 

 ## 5) Junit (xUnit)

: 단위(unit) 테스트를 지원하는 Java기반 테스팅 프레임워크

: 단위테스트 케이스 안에 테스트 메서드 선언 할때 규칙

​	-> @Test 어노테이션 선언해줘야한다.

​	->public void로 선언

: @Test, @Before, @After

: Assert.assertSame() - 주소비교, Assert.assertEquals() - 값비교

: @RunWith(SpringJUnit4ClassRunner.class)

	- @RunWith는 jUnit 프레임워크의 테스트 실행방법을 확장할 때 사용하는 어노테이션이다.
	- SpringJUnit4ClassRunner라는 클래스를 지정해주면 JUnit이 테스트를 진행하는 중에 ApplicationContext를 만들고 관리하는 직업 진행

: @ContextConfiguration

* 스프링 빈(Bean) 설정 파일의 위치를 지정할 때 사용되는 어노테이션이다.

: @Autowired

*  스프링DI에서 사용되는 특별한 어노테이션이다.
* 해당 변수에 자동으로 빈(Bean)을 매핑 해준다.
* getBean을 더이상 사용안해도 된다 (auto-wired)



## Bean 등록

### 1) XML 설정 단독 사용

* 모든 Bean을 명시적으로 XML에 등록하는 방법이다.
* 생성되는 모든 Bean을 XML에서 확인할 수 있다는 장접이 있으나 Bean의 개수가 많아지면 XML 파일을 관리하기 번거로울 수 있다.
* 여러 개발자가 같은 설정파일을 공유해서 개발하다 보면 설정파일을 동시에 수정하다가 충돌이 일어나는 경우도 적지 않다.



### 2) Annotation과 XML 혼용

* Bean으로 사용될 클래스에 특별한 어노테이션을 부여해주면 이런 클래스를 자동으로 찾아서 Bean으로 등록한다.
* @Component 이 선언죈 클래스를 자동으로 찾아서 Bean으로 등록 해주는 방식을 Bean Scanning을 통한 자동인식 Bean 등록 기능

#### Bean 의존관계 주입 Annotation

* @Autowired, @Resource 어노테이션은 의존하는 객체를 자동으로 주입해 주는 어노테이션이다.
* @Autowired: 정밀한 의존관계 주입(변수, setter 메서드, 생성자, 일반메서드)
* @Resource: 어플리케이션에서 필요로 하는 자원을 자동연결할 때 사용(변수, setter 메서드)
* @Autowired는 타입으로, @Resource는 이름으로 연결한다는 점이 다르다.



### 3) 어노테이션 설정 단독 사용

* Spring JavaConfig 프로젝트는 XML이 아닌 자바 코드를 이용해서 컨테이너를 설정할 수 있는 기능을 제공하는 프로젝트
* @Configuration과 @Bean 어노테이션을 이용해서 스프링 컨테이너에 새로운 빈 객체를 제공
* Spring 3.0 부터는 어노테이션을 이용한 Bean의 등록 및 Bean들 간의 연결 설정을 자바 코드 내부에 하므로 XML을 전혀 사용하지 않는다.



내일 할 내용

1. Spring Test 이용해서 TestCase작성
2. DI을 구현하는 방식
   1. XML에 설정하는 방식
   2. Annotation + xml 설정을 사용해서 설정하는 방식
   3. Java Config 를 사용해서 설정하는 방식 (Spring Boot, No xml)
3. MyBatis
   1. MyBatis -SqlSessionFactory SqlSession
   2. MyBatis-Spring - SqlSessionFactoryBean, SqlSessionTemplate 어떤 역할이고 무엇인지?
   3. MyBatis의 구조



9/10 숙제

* Servlet 과 JSP 무엇이고, 어떤 역할을 하는지?
* MVC (Model View Controller)패턴
* Model 1 Architecture 와 Model 2 Architecture의 차이점
* Servlet 클래스를 web.xml 설정하는 방법.
* JSP Tag 어떤것들이 있는지
* JSTL(Java Standard Tag Library)란 무엇인지

