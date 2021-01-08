# Angular.js

**타입스크립트 기반으로 구성된 프레임 워크**



## Angular 모듈

**각종 세팅, 정보 및 내용을 컴포넌트가 동작 할 수 있게 해주는 일종의 설정파일, 가이드파일 개념**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- @기호: 앵귤러의 기능을 의미하는 데코레이터가 붙은 것을 의미
- *앞으로 @기호가 있으면 앵귤러의 기능!
- NgModule = "NG모듈" = "모듈"

=> 모듈: **데이터 관리 & 다양한 컴포넌트 관리** ||컴포넌트: **화면 구성 & 데이터 처리**

.

`ng g component 이름` = 컴포넌트 데코레이터(@Component)가 붙은 컴포넌트 클래스 파일 만듦.

1. 모듈에 등록된 컴포넌트는 html 파일에 컴포넌트의 셀렉터가 테그처럼 사용해야 동작.

2. 새로 만든 컴포넌트를 사용하려면 반드시 모듈에 등록!!!!!

   컴포넌트를 사용한다 = 모듈에 등록한다



## Angular main.ts

main.ts =  앵귤러 프로젝트가 실행 될 때 가장 먼저 동작하는 곳.

bootstrapModule 함수 = 앵귤러 프로젝트가 동작 할 때 가장 먼저 사용할 모듈이 무엇인지 써 주는 곳.

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

1. **가장 먼저 동작할 모듈**은 main.ts에서 bootstrapModule 함수에 클래스명을 넣어줌.

2. **가장 먼저 동작할 컴포먼트**는 main.ts에서 등록한 가장 먼저 동적할 모듈의 bootstrap에 해당 컴포넌트를 넣어주면 됨.

   => **앱모듈과 앱컴포넌트는 사실 직접적으로 화면과 관련된 내용을 작성하는것 보다는 중간 역할을 하는 데 조금 더 사용**

```html
<app-world *ngIf="visible"></app-world>
```

- ngIf = if condition

  

------

> 1. **모듈은 여러개의 컨포넌틀르 가질 수 있음. 이러한 컴포넌트를 관리해 주는 것을 모듈.**
> 2. **컴포넌트는 화면을 담당. 화면을 구성하여 다양한 동작을 함.**
> 3. **가장 먼저 동작하는 모듈은 main.ts 파일의 bootstrapModule에 등록**
> 4. **모듈에서 가장 먼저 동작하는 컴포넌트는 bootstrap에 등록.**
> 5. **자신이 만든 컴포넌트를 추가/동작하려면, 해당 컴포넌트의 셀렉터의 내용을 html 태그 형식으로 bootstrap에서 사용된 컴포넌트에 추가**



------

## Angular module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //  
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule, FormsModule  //등록..?
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- FormsModule에서 주로 사용되는 ngModel 디렉티브는 데이터를 input 형식의 테그에 묶어줄 때 사용
  - input 형식의 테그의 데이터를 손쉽게 관리하는 개념







