function Account(id,money) {
    this.id = id;
    this.balance = money;
}
Account.prototype.info = function() {
    console.log(`계좌번호:${this.id}, 잔액:${this.balance}`);
}

function Bank() {
    this.accs = [];
}
Bank.prototype.make_account = function(id, money) {
    this.accs.push(new Account(id,money));
};
Bank.prototype.deposit = function(id, money) {
    for(let acc of this.accs) {
        if(acc.id==id) {
            acc.balance += money;
        }
    }
}
Bank.prototype.withdraw = function(id, money) {
    for(let acc of this.accs) {
        if(acc.id==id) {
            acc.balance -= money;
        }
    }
}
Bank.prototype.info = function(id) {
    for(let acc of this.accs) {
        if(acc.id==id) {
            acc.info();
        }
    }
}
Bank.prototype.all_info = function() {
    for(let acc of this.accs) {
        acc.info();
    }
}

let bank = new Bank();
bank.make_account(101,100000);
bank.make_account(102,200000);
bank.make_account(103,300000);

bank.all_info();
bank.deposit(102,10000);
bank.info(102);
bank.withdraw(103,10000);
bank.info(103);
// let accs = [new Account(1001,10000), new Account(1002,20000),
//             new Account(1003,40000), new Account(1004,50000)];

// for(let acc of accs) {
//     acc.info();
// }           
/* 출력결과
계좌번호:1001, 잔액:10000
계좌번호:1002, 잔액:20000
계좌번호:1003, 잔액:40000
계좌번호:1004, 잔액:50000
*/ 
//위와같은 출력결과가 나오도록 Account 생성자함수와 info 메소드 생성