//객체
let account = {
    id:100,
    name:'hong',
    balance:100000,
    print:function() {
        console.log(`계좌번호:${this.id}, 이름:${this.name}, 잔액:${this.balance}`)
    }
};
//account.print();
// console.log(`계좌번호:${account.id}, 이름:${account.name}, 잔액:${account.balance}`);
//console.log(`계좌번호:${account['id']}, 이름:${account['name']}, 잔액:${account['balance']}`);

let person = {
    name : '홍길동',
    age : 23,
    info() {
        console.log(`이름:${this.name}, 나이:${this.age}`);     
    }
};
//person.info();
//이름:홍길동, 나이:23
person.name = '김길동';
person.age = 25;
//person.info();

let pers = [{name:'hong',age:20},{name:'cha',age:25},
    {name:'park',age:30}, {name:'lee', age:33}];

let info = function(p) {
    console.log(`이름:${p.name}, 나이:${p.age}`);
}

// for(let per of pers) {
//     info(per);
// }

function Fruit(name, price) { // 생성자 함수
    this.name = name;
    this.price = price;
}
Fruit.prototype.info = function() { // 메소드 추가
    console.log(`과일명:${this.name}, 가격:${this.price}`);
};

// let frs = [new Fruit('사과',1000),new Fruit('바나나',2900),
//             new Fruit('오렌지',2000), new Fruit('수박', 15000)];
// for(let f of frs) {
//     f.info();
// }

//내장객체
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// console.log(new Date().getSeconds());

// let num = new Number(123);
// console.log(typeof num);
// console.log(num.toString());
// let str = new String("string~~");
// console.log(typeof str);
// let vstr = "i am a string";
// console.log(typeof vstr);
Number.prototype.myfunc = function() {}
//string.prototype.myfunc = function() {}

let fs = 'banana|orange|apple|kiwi';
let is = fs.split('|');
//console.log(is);
for(let f of is) {
    console.log(f);
}
console.log(fs.toUpperCase());
console.log(fs.charAt(3)); //fs[3]
console.log(fs.concat('|melon'));
console.log(fs);
console.log(fs.slice(7,13));
console.log(fs.substr(7,6));
console.log(fs.substring(7,13));
console.log(fs.indexOf('|'),fs.length);