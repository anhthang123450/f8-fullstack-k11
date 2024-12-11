function printMultiplicationTable(num) {
    for (i = 1; i <= 9; i++) {
        console.log(`Bảng cửu chương ${i} `);
        for (j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${j * i}`);
        }
    }
}
console.log(printMultiplicationTable());