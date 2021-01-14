## UI-Router

- route 라이브러리는 html 데이터를 셋팅할 수 있는 view가 단 하나만 존재하지만 UI-Route는 여러 개를 두어 각 부분별로 제어 함.
- 요청이 발생했을때 반응하는 설정을 각각 모듈화하여 유지보수성 up
- 어떠한 요청이 발생됬을때 어느 부분을 실행하고 어떻게 처리를 할것인지 에 대한 정보를 가지고 있는게 **$stateProvider**

```javascript
$stateProvider
	.state('main',{
  	url: loadbalancers,
  	templateUrl: basePath + 'loadbalancers/panel.html',
	})
	.state('page1',{
  	url: loadbalancers,
  	templateUrl: basePath + 'page1/panel.html',
  	controller: 'page1Controller',
  	constrollerAs: 'ctrl'
	})

//otherwise: 다른 state가 나오면 무조건 main으로 돌린다.
$urlRouterProvider.otherwise("main") 

app.controller("page1Controller", function($scope){
  $scope.data1 = "문자열1"
  $scope.data2 = "문자열2"
})

```

```html
<div ng-app="test_app">
  //ui-sref: stateProvider에서 "main"이 name인 곳에서 템플릿을 가져온다
  <a ui-sref="main">main</a> 
  <hr />
  <ui-view></ui-view>
</div>
```





## UI Route 모듈화

- UI Route는 각 state에 대한 정보를 모듈화 하여 관리.

- 코드를 분리함으로써 유지보수의 용의성 가짐.

  ```javascript
  app.component("page1",{
    templateUrl:
  })
  ```

  