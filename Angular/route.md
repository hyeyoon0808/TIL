# Route

SPA으로 반응한다!!

![?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboLKpW%2FbtqFQK5sR9V%2Fcmk6eDLbLgDvBjITf1u311%2Fimg](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboLKpW%2FbtqFQK5sR9V%2Fcmk6eDLbLgDvBjITf1u311%2Fimg.jpg)

![SE__AppEntwicklung__SPA-3](https://anexia.com/fileadmin/img/illustrations/SE__AppEntwicklung__SPA-3.svg)

- ng-view는 route에서 한번만 선언됨

- ```html
  //routing을 컨트롤가능
  <body>
  <sccript>
    app.config(function($routeProvider){
      //앞부분("/")을 실행해 주면 뒷부분이 실행된다({})
      $routeProvider.when("/", {
        template: "<h1>Main Page</h1>"
      })
    	$routeProvider.when("/page1", {
        template: "<h1>Page 1</h1><h3>{{data1}}</h3>",
    		controller: "controller1"
      })
    	$routeProvider.when("/page2", {
        templateUrl: "page2.html"
    		controller: "controller2"
      })
    })
    //page 1에서 controller 호출
    app.controller("controller1", function($scope){
    		$scope.data1 = "Controller1에서 셋팅한 문자열"
    })
    app.controller("controller2", function($scope, $http){
    		$scope.data2 = "Controller2에서 셋팅한 문자열"
    
    		//data.json에서 data를 가져온다.
    		var http = $http.get("data.json") 
    		http.then(function(response){
    			$scope.data_list = response.data
    		})
    })
   </sccript>
  </body>
  
  <div ng-app="test_app">
    <a href="#/!">main page</a>
  	<a href="#!page1">page 1</a>
    <a href="#!page1">page 2</a>
  </div>
  ```

  

- `controller`– – 새로 생성 된 범위와 연결되어야하는 컨트롤러 fn 또는 문자열로 전달 [되는](https://docs.angularjs.org/api/ng/type/angular.Module#controller) 경우 [등록 된 컨트롤러](https://docs.angularjs.org/api/ng/type/angular.Module#controller) 의 이름입니다 .`{(string|Function)=}`

- `controllerAs`– – 컨트롤러에 대한 참조를위한 식별자 이름. 존재하는 경우 컨트롤러는 이름 으로 범위에 게시됩니다 .`{string=}``controllerAs`

- `template`– – [ngView](https://docs.angularjs.org/api/ngRoute/directive/ngView) 또는 [ngInclude](https://docs.angularjs.org/api/ng/directive/ngInclude) 지시문에서 사용해야하는 문자열로 html 템플릿을 반환하는 문자열 또는 함수로 html 템플릿 . 이 속성은 .`{(string|Function)=}``templateUrl`

  경우 `template`함수이며, 그것은 다음과 같은 매개 변수로 호출됩니다 :

  - `{Array.<Object>}`- 현재 경로를 적용하여 현재 에서 추출한 경로 매개 변수 `$location.path()`

  `template`또는 중 하나 `templateUrl`가 필요합니다.

- `templateUrl`– – [ngView에서](https://docs.angularjs.org/api/ngRoute/directive/ngView) 사용해야하는 html 템플릿의 경로를 반환하는 경로 또는 함수입니다 .`{(string|Function)=}`

  경우 `templateUrl`함수이며, 그것은 다음과 같은 매개 변수로 호출됩니다 :

  - `{Array.<Object>}`- 현재 경로를 적용하여 현재 에서 추출한 경로 매개 변수 `$location.path()`

  `templateUrl`또는 중 하나 `template`가 필요합니다.

- `resolve`-- 컨트롤러에 삽입되어야하는 종속성의 선택적 맵입니다. 이러한 종속성이 약속 인 경우 라우터는 컨트롤러가 인스턴스화되기 전에 모두 해결되거나 거부 될 때까지 기다립니다. 모든 promise가 성공적으로 해결되면 해결 된 promise의 값이 주입되고 [$ routeChangeSuccess](https://docs.angularjs.org/api/ngRoute/service/$route#$routeChangeSuccess) 이벤트가 발생합니다. [프라 미스](https://docs.angularjs.org/api/ngRoute/service/$route#$routeChangeError) 중 하나라도 거부되면 [$ routeChangeError](https://docs.angularjs.org/api/ngRoute/service/$route#$routeChangeError) 이벤트가 발생합니다. 템플릿에서 해결 된 종속성에보다 쉽게 액세스 할 수 있도록 경로 범위 에서 맵을 사용할 수 있습니다 (기본적으로) 또는 속성에 지정된 사용자 지정 이름 (아래 참조). 이는 [구성 요소로](https://docs.angularjs.org/api/ng/type/angular.Module#component) 작업 할 때 특히 유용 할 수 있습니다.`{`