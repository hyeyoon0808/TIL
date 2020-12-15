//console.log('Hello!');
let num_1 = 100; //var로 변환 불가인 변수 let
const num_2=100; //can't be defined into new definition
var num_3 = 10; //available to define into a new type

//console.log(num);

let strvar_1 = "good morning";
let strvar = "good" + "morning";
console.log(strvar);

let n1=10, n2=20, n3=30;

let m4 = n1 >= 10 || ++n2<=10;
console.log(m4); //True
console.log(n2); //21이 아닌 20 
//why? 논리연산자에서는 앞에 true가 나오면 뒤에 문항은 계산을 안함.

//like I said... &&에서도 마찬가지
let m5 = n1 <= 10 && ++n2<=10;
console.log(m5); //false
console.log(n2); //21이 아닌 20 
//why? 논리연산자에서는 앞에 true가 나오면 뒤에 문항은 계산을 안함.

console.log('hyeyoon'[0]); //=h:first character

let age = 26;
console.log(`gildong age: ${age}`);
console.log(`올해는 ${new Date().getFullYear()}년 입니다`); //2020

//switch - 숫자연산에 많이 쓰인다.
let input = 32;
switch(input%2) {
    case 0: console.log("짝수"); break;
    case 1: console.log("홀수"); break;
}

// switch(true) {
//     case n >=90: grade='A'; break;
//     case n >=80: grade='B'; break;
//     case n >=70: grade='C'; break;
//     default: grade='F'; break;
// }
// console.log(grade);

//삼항조건 연산자
let d=33;
console.log(d%2==0? '짝수':'홀수');

let val1=20, val2=30, val3=40;
let max = val1>val2? val1:val2;
max = max>val3? max:val3;
console.log(max);

let min = val1<val2? (val1<val3? val1:val3) : (val2<val3? val2:val3);
console.log(min);


//whether data is there or not
// let noval;
// noval = noval? noval:123;
// console.log(noval+10);

let noval;
noval = noval? noval:100;
noval = noval? noval:200;
console.log(noval+10);

let sum =0;
for(let x=1; x<=1000; x++){
    sum +=x;
}
console.log(sum);

let sum1=0, sum2=0;
for(let x=1; x<=1000; x++){
    if(x%2==0){
        sum1+=x;
    }
    if(x%2==1){
        sum2+=x;
    }
}
console.log(sum1);
console.log(sum2);