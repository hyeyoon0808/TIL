# Angular - Module

**Angular 1 hooks 는 '$'을 쓰고, Angular 2 hooks 는 'ng'를 쓴다**

컴포넌트, 파이프, 서비스 등과 같은 앵귤러 애플리케이션의 주요 부분을 기능단위로 그룹핑 해줌.

```
ng g c todo/todos --module todo/todo.module.ts --export
```

- todo에 todos폴더에 컴포넌트(c)를 추가
- (--module) 특정 모듈을 지정한다는 의미고 todo/todo.module.ts 를 지정
- --export는 그 모듈이 다른곳에도 쓰일 수 있다는 의미
- 참고로, app 모듈에서는 다른 모듈들 imports시켜야 쓸 수 있음



## Component

**뷰와 로직을 정의**

```typescript
import {Component, OnInit} from '@angular/core';

@Component({
  //element이름을 가르킴 해당 element를 가져와 component 사용
  selector: 'app-todos', 
  //template url 나타내줌
  templateUrl: './todos.component.html',
  //style url-여러url 지정 가능 (배열)
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:{
    done: boolean,
    text: string
  }[]; //todos에서 기대하는 type이다.
  construnctor(){
    this.todos = [
      {done: false, text: '운동하기'},
      {done: true, text: '공부하기'}
     ];
  }
  ngOnInit(){
    
  }
}
/////////////////////////////////////
import {Component, OnInit} from '@angular/core';

@Component({
  //element이름을 가르킴 해당 element를 가져와 component 사용
  selector: 'app-todo', 
  //template을 직접적으로 나타내줌
  template: 
  	<input type="checkbox"> 운동하기
})
 
export class TodosComponent implements OnInit {
  construnctor(){ }
  ngOnInit(){}
  
  toggleTodo(todo){
    todo.done = !todo.done
  }
} 
```

```html
<div>
  <app-todo></app-todo>
  <div>
    <input type="checkbox" [checked]="todos[1].done"> {{todos[0].text}}
    
  </div>
</div>
```

=> 운동하기

=> component에서 todos[1]가 바인딩되어 true값을 받는다.



## Template

HTML 코드로서 템플릿 표현

### 바인딩

> Component (class) -----------------------------------------------------------------> Dom
>
> ​										{{템플릿 표현식}} => <h1>{{title}}</h1>
>
> ​										[속성]= "템플릿 표현식" => <todo [todo] = "work">
>
> ​								  <-----------------------------------------------------------------
>
> ​										(이벤트) = "템플릿 문장" => <button(click)="handle()">
>
> ​								 <----------------------------------------------------------------->
>
> ​				[(ngModel)]="템플릿 표현식"=><input type="text" [(ngModel)]="name">



