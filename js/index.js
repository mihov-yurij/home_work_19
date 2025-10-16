
function getRandomInt(min, max) {
    const range = max - min + 1
    return Math.floor(Math.random() * range + min);
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(20, 80));
console.log(getRandomInt(1, 100));




function greet(message, names) {
        return `${message}, ${names}`;
};
console.log(greet('Hey', 'Bob'));
console.log(greet('Hello' , 'Mary'));
console.log(greet('Hi' , 'John'));



function sumBigIntegers(numStr1, numStr2) {
    return Number(numStr1) + Number(numStr2);
}
let numStr1 = '9007199254740991';
let numStr2 = '9007199254740991';
const result = sumBigIntegers(numStr1, numStr2);
console.log(result);