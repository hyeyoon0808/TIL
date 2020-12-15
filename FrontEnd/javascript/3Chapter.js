let dan = 5;

for(let i=1; i<=9; i++){
    console.log(`${dan}*${i}=${dan*i}`);
}

let x=1;
while(x<10){
    console.log(`${dan}*${x}=${dan*x}`);
    x++;
}

let odd=1; even=1;
let i=1;
while(i<=1000){
    if(i%2==0) even+=i;
    else odd+=i;
    ++i;
}
console.log(`even:${even}, odd:${odd}`);


//index 순번
let arry = [1,2,3,4,5];
for(let i in arry){
    console.log(arry[i]); 
}

//데이터
for(let o of arry){
    console.log(o);

}

// let star='';
// let cnt =5;
// for(let i=0; i<cnt; i++){
//     for(let j=0; j<i+1; j++){
//         star+='*';
        
//     }
//     star+='\n';
// }
// console.log(star);

let star='';
let cnt =5;
for(let i=cnt; i>0; i--){
    for(let j=i; j>0; j--){
        star+='*';
        
    }
    star+='\n';
}
console.log(star);

let gugudan='';
for(let idx=1; idx<10; idx++){
    for(let dan=2; dan<10; dan++){
        gugudan+=`${dan}*${idx}=${dan*idx}\t`;
    }
    gugudan+='\n';
}
console.log(gugudan);

//continue is used for ignoring values in the current statement and continue
let sum=0;
for(let i=1; i<=100; i++){
    if(i%2==1) continue; //odd numbers are ignored and continue...
    sum += i;
}
console.log(i);


//info
let pers =[{name:'hong', age:20}, {name:'cha',age:25},
    {name: 'park', age:30}, {name:'lee', age:33}];

let info = function(p) {
    console.log(`name:${p.name}, age:${p.age}`);

}
for(let per of pers) {
    info(per);
}

//acount
function Account(id, money) {
    this.id = id;
    this.balance = money;
}
Account.prototype.info = function() {
    console.log(`account id:${this.id}, money:${this.balance}`);
}
let accs = [new Account(1001,10000), new Account(1002,20000),
            new Account(1003, 40000), new Account(1004, 500000)];

for(let acc of accs) {
    acc.info();
}
Bank.prototype.make_account = (id, money) => {
    this.accs.push(new Account(id,money));
};
Bank.prototype.deposit =(id, money) => {
    for(let acc of accs){
        if(acc.id==id){
            acc.balance += money;
        }
    }
}
Bank.prototype.withdraw =(id, money) => {
    for(let acc of accs){
        if(acc.id==id){
            acc.balance -= money;
        }
    }
}