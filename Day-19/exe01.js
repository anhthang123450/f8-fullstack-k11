function printSquareNumber(number) {
    let n = parseFloat(prompt("Nhập số nguyên dương: "))
    if (isNaN(n) || n <= 0)
        return "Dữ liệu không hợp lệ"
    let i = 1;
    console.log(`số chính phương từ 1 đến ${n} là:`);
    while ((i * i) <= n) {
        console.log(i * i);
        i++;
    }
}
console.log(printSquareNumber());