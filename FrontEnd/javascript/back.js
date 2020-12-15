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
function Bank() {
    this.accs = [];
}
Bank.prototype.make_account (id, money) {
    this.accs.push(new Account(id,money));
};
Bank.prototype.deposit =(id, money) => {
    for(let acc of this.accs){
        if(acc.id==id){
            acc.balance += money;
        }
    }
}
Bank.prototype.withdraw =(id, money) => {
    for(let acc of this.accs){
        if(acc.id==id){
            acc.balance -= money;
        }
    }
}
Bank.prototype.info =(id)=> {
    for(let acc of this.accs){
        if(acc.id==id){
            acc.info();
        }
    }
}

Bank.prototype.all_info = () => {
    for(let acc of this.accs) {
        acc.info();
    }
}

let bank = new Bank();
bank.make_account(101,10000);
bank.make_account(102,20000);
bank.make_account(103,30000);
bank.make_account(104,40000);

bank.all_info();