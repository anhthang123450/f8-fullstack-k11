let a = +prompt("Nhập cạnh a: ");
let b = +prompt("Nhập cạnh b: ");
let c = +prompt("Nhập cạnh c: ");

function triangle() {
    if (a + b > c && a + c > b && b + c > a) {
        alert(`${a}, ${b}, ${c} là 3 cạnh của 1 tam giác`)
    } else {
        alert(`${a}, ${b}, ${c} không phải 3 cạnh của 1 tam giác`)
    }
}

console.log(triangle());