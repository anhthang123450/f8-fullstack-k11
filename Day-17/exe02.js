let a = 20;
let b = 10;
let c = 5;
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

if (a > b && a > c) {
    console.log(`${a} là số lớn nhất`);
} else if (b > c) {
    console.log(`${b} là số lớn nhất`);
} else {
    console.log(`${c} là số lớn nhất`);
}