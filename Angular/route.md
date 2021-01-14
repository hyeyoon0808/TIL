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

  

