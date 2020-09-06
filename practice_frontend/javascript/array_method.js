let array =[{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

let popped = array.pop();
console.log('-배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);

array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('- push() 메소드를 호출한 이후의 배열');
console.log(array);

// arrayA.sort(() => {
//     return price - price;
// })

let arrayB = [52,273,32,64,72];
console.log('---forEach() 메소드---');
let tot=0;
arrayB.forEach((item, index) =>{
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
    tot += item;
});
console.log(tot);

console.log('---map()---');
let outputA = arrayB.map((item, index) => {
    return item * item;
});
console.log(outputA);
console.log(typeof outputA);

