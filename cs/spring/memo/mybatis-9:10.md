# **Spring**

**2020.September.09**



## 2) Servlet

* Servlet 과 JSP 무엇이고, 어떤 역할을 하는지?

* MVC (Model View Controller)패턴

* Model 1 Architecture 와 Model 2 Architecture의 차이점

* Servlet 클래스를 web.xml 설정하는 방법.

* JSP Tag 어떤것들이 있는지

* JSTL(Java Standard Tag Library)란 무엇인지

* 

* MyBatis Mapper 설명

* servlet/JSP

* 

  



> Servlet은 자바가 주이고 jsp은 스크립트 방식이다.



web.xml

<!-- servlet 컨테이너 설정 파일 -->

<!-- Deployment Description(DD):배포 설명자 -->

chapter1~4장

spring MVC란?  Spring MVC구조



doGet()/doPost() 차이

* **GET은 가져오는 것이고 POST는 수행하는 것입니다.**
* Get -> URL에 Append해서 보냄
* Post -> Stream의 Body에 Append해서 보냄
* GET은 주소줄에 값이 ?뒤에 쌍으로 이어붙고 POST는 숨겨져서(body안에) 보내진다.
* GET은 URL에 이어붙기 때문에 길이제한이 있어서 많은양의 데이터는 보내기 어렵고 POST는 많은 양의 보내기에도 적합하다.(역시 용량제한은 있지만)
* 즉 http://url/bbslist.html?id=5&pagenum=2 같이 하는 것이 GET방식이고 form을 이용해서 submit을 하는 형태가 POST입니다.
* **GET은 Select적인 성향을 가지고 있습니다.** GET은 서버에서 어떤 데이터를 가져와서 보여준다거나 하는 용도이지 서버의 값이나 상태등을 바꾸지 않습니다. 게시판의 리스트라던지 글보기 기능 같은 것이 이에 해당하죠.(방문자의 로그를 남긴다거나 글읽은 횟수를 올려준다거나 하는건 예외입니다.) 
* 반면에 **POST는 서버의 값이나 상태를 바꾸기 위해서 사용합니다.** 글쓰기를 하면 글의 내용이 디비에 저장이 되고 수정을 하면 디비값이 수정이 되죠. 이럴 경우에 POST를 사용합니다.





9/11

* Spring MVC
* JSP 사용, Rest(JSON, XML)



9/14

* Spring Boot 시작
* Thymeleef - JSP 동일한 역할