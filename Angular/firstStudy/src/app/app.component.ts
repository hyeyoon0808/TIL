import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    visible : boolean = false;
}

// const array : Array<string> = ['data0','data1','data2']

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title : string = 'firstStudy';
  
//   showArray : Array<string>; //아직 초기화 되지 않았으며 protected한 변수 입니다.

//   constructor (){  //생성자는 오직 1번만 클래스파일이 생성 될 때 동작 합니다.
//     this.showArray = array;  //외부 array의 변수 값을 showArray게 참조하게 하였습니다.
//   }

//   public clickAfterPrint () : void{
//     this._innerFunc();
//     console.log(array);
//     console.log(this.title);
//   }

//   private _innerFunc(){
//     array.push('data' + array.length);  //배열값을 변화시킵니다.
//   }
// }