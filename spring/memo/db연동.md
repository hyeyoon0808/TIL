- 도메인을 기준으로 Micro Service 로 쪼갠다.
- jpa 사용시 rest까지 생성가능하기 떄문에 서비스랑 컨트롤러 안만들어도 되는 장점이 있음.
- 자동으로 생성됨.
- 프로젝트 생성시 롬복체크하고 가면 가끔 세터게터가 안만들어지는 경우가 생김
- value object 가 아니라 엔티티로 표현-> 식별자가 존재하면 엔티티 없으면 그냥 밸루오브젝트
  둘이 같이 묶여야 한다면 aggregate 로 묵는다.



- 기능별로 정의한다
- gson 으로 java - json 변환



- //입력값 - Filter,InterceptorFilter



- DTO 는 데이터를 담아서 통신할때 Serializable 을 상속받아 구현하는 객체
- Store(DAO) 에서 결과 데이터를 Service 에 리턴할 때 같은 VM 이 아니고 분산된 VM에 전달되어야 하면 현재 적용하고 있는 Book 이나 Todo를 DTO로 작성
- controller에서 service 호출할 때 전달되거나 리턴받는 데이터가 분산되어 있을 경우 Serializable 상속받는 DTO 작성



- Domain Object
- DB랑 OR 해서 데이터를 담아쓰는 객체. 
- Entity Object : 최소 정보 단위를 담는 데이터 DB랑 연결되기 때문에 Identify 가 존재
- Value Object : 식별자가 없음. 
- Aggregate : 실제 서비스들의 기본 Entity Object가 여러개 있으면 하나의 프로세스를 수행할때(주문) 모든 과정이 하나로 묶이는 트랜잭션에서 하나로 묶이는 데이터.
- 분산해서 데이터를 담는 것을 목적으로 하는 거에 DTO

- 



- @PersistenceContext
- 스프링프레임워크 jpa 를 지원하는 라이브러리에서 디비에 사용하는 디비에 연결하고 해당되는
- statment 객체 얻고 쿼리수행하고 결과잇으면 결과 리턴해주는 것들을 내부에서 구현을 안햇음에도 불구하고 사용이 가능하다.

- 하이버네티스는 엔티티매니저를 자동으로 해준다



- ojdbc6 추가
- Build Path 에서 configure 들어가서 path 설정-> edit -> ojdbc6 경로 설정



- pom.xml 에 추가

- ```
  <repositories>
  		<repository>
  			<id>oracle</id>
  			<url>http://maven.icm.edu.pl/artifactory/repo/</url>
  		</repository>
  	</repositories>
  ```

  

```
<dependency>
			<groupId>com.oracle</groupId>
			<artifactId>ojdbc6</artifactId>
			<version>11.2.0</version>
		</dependency>
```

m.2 /reository/com/oracle/ojdbc6/11.2.0 에 기존의 ojdcb6 복사해서 넣고 이름 

ojdbc6-11.2.0.jar 로 바꾸기

 



pom.xml 에 추가

```
<repositories>
		<repository>
			<id>oracle</id>
			<url>http://maven.icm.edu.pl/artifactory/repo/</url>
		</repository>
	</repositories>
```



```
<!-- https://mvnrepository.com/artifact/com.oracle/ojdbc6 -->
		<dependency>
			<groupId>com.oracle</groupId>
			<artifactId>ojdbc6</artifactId>
			<version>11.2.0</version>
		</dependency>
```



