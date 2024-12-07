let a = 1;
let b = 0;
let c = 8;

if (a > b) {
    [a, b] = [b, a]// hoán đổi vị trí a và b
}

if (a > c) {
    [a, c] = [c, a] //hoán đổi vị trí a,c
}

if (b > c) {
    [b, c] = [c, b] // hoán đổi vị trí b,c
}

console.log(a, b, c);