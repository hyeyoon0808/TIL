# Angular.js

**타입스크립트 기반으로 구성된 프레임 워크**



## Angular 컴포넌트

- private: 다른 곳에서 사용 못하고 오직 해당 클래스에서만 사용
- protected: 해당 클래스와 직접적으로 관계된 곳에서만 사용 => **앵귤러의 클래스의 접근 제어 기본 값**
- public: 누구든지 사용 가능

```javascript
import { Component } from '@angular/core';

const array : Array<string> = ['data0','data1','data2'] //클래스 안에 없기 때문에 글로벌로 사용 가능

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'firstStudy';

	showArray : Array<string>; //아직 초기화 되지 않았으며 protected한 변수
  
  constructor(){ //생성자는 오직 1번만 클래스 파일이 생성될 때 동작합니다.
	  this,showArray = array; //외부 array의 변수 값을 showArray에게 참조하게 하였습니다.
  }

  public clickAfterPrint () : void{ //콜른 뒤의 내용은 반환 값이다.. void는 "없다"를 뜻함
    this._innerFunc(); //_innerFunc이 private이기 때문에
    console.log(array);
    console.log(this.title);
  }

  private _innerFunc(){
    array.push('data' + array.length); //배열 값을 변화시킵니다.
  }
}
```

- 변수에 데이터 형태를 지정한 것과 동일하게 함수의 소괄호 뒤에 콜른(:)을 사용한 뒤에 변환값을 지정.



------

### 컴포넌트 기본 구성 

```javascript
import {Component} from '@angular/core';

@Component({
  //key, value 형식의 내용
})
export class MyCustomComponent{
  //각종 기능들
}
```

1. selector

   컴포넌트 고유 이름. 

2. templateUrl

   해당 컴포넌트에서 사용 할 html 파일의 위치를 의미

3. styleUrls

   해당 컴포넌트에서 사용 할 css 파일의 위치를 의미



------

### 앵귤러 기능

1. 앵귤러의 표현식 
   - {{}}
   - 양반향 데이터 바인딩
2. 클릭 기능
   - 소괄호에 click으로 기능 사용
3. 구조 지시자 (디렉티브)