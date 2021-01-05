import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '아무말';

  constructor (){  //constructor 라는 함수를 추가합니다.
    console.log('동작');
  }

  public clickAfterPrint():void{
    console.log('출력');
  }
}