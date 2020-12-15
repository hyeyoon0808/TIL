# Tymeleaf & Boot+MyBatis

**2020.September.17**

 

## Spring Boot Web MVC : RestController(XML)

* ViewResolver
   : Controller에서 반환한 값(ModelAndView 혹은 Model)을 통해 뷰를 만드는 역할
* ContentNegotiatingViewResolver
   : 동일한 URI에서 HTTP Request에 있는 Content-type 및 Accept 헤더를 기준으로 다양한

* Content-type으로 응답할 수 있게 하는 ViewResolver



## Tymeleaf

##### HTML, XML, JavaScript, CSS 및 일반 텍스트를 처리 할 수 있는 웹 및 독립형 환경에서 사용할 수 있는 Java 템플릿 엔진입니다.

* Spring Boot MVC에서 V(View)담당.





## CORS

* 보통 보안 상의 이슈 때문에 동일 출처를 기본적으로 웹에서는 준수하게 됩니다.
* SOP(Single Origin Policy)
  * 같은 origin에만 요청을 보낼 수 있다.
* CORS(Cross-Origin Resource Sharing)
  * single origin policy 를 우회하기 위한 기법
  * 서로 다른 origin간에 resource를 share하기 위한 방법
* Origin?
  * URI스키마(http,https) + hostname(localhost)+포트(8080,18080)





## Actuator



