let string ='hello. good morning';
if(string.indexOf('morning')>=0) {
    console.log('such a beautiful day..!');
}

String.prototype.contain = function(input) {
    return this.indexOf(input) > -1;
}
console.log(string.contain('night'));

const repl = require('repl');
repl.start({
    prompt: 'enter num >> ',
    eval:(command, context, filename, callback) => {
        let number = Number(command);
        if(isNaN(number)) {
            console.log('this is not number');
        }else {
            console.log('this is number');
        }
        callback();
    }
})

const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.on('line', function(line) {
    let number = Number(line);
    if(isNaN(number)) {
        console.log('this is not number');   
    }else {
        console.log('this is number');
    }
    r1.prompt();
}).on('close', function() {
    process.exit();
});
