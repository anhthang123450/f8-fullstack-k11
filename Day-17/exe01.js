let a = 3;
let b = 7;
console.log(a);
console.log(b);
function swapNumbers(a, b) {
    a = a + b; //a = 8
    b = a - b; // b = 3
    a = a - b; // a = 5
    return `${a}, ${b}`;
}
console.log(swapNumbers(a, b));
