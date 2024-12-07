let electricNumber = +prompt("Nhập số điện: ");
function eclectricBill() {
    if (electricNumber <= 50) {
        alert(`Tiền điện phải trả là : ${electricNumber * 1678} `)
    } else if (electricNumber <= 100) {
        alert(`Tiền điện phải trả là: ${((electricNumber - 50) * 1734) + (50 * 1678)} `)
    } else if (electricNumber <= 200) {
        alert(`Tiền điện phải trả là: ${((electricNumber - 100) * 2014) + (50 * 1734) + (50 * 1678)} `)
    } else if (electricNumber <= 300) {
        alert(`Tiền điện phải trả là: ${((electricNumber - 200) * 2536) + (100 * 2014) + (50 * 1734) + (50 * 1678)} `)
    } else if (electricNumber <= 400) {
        alert(`Tiền điện phải trả là: ${((electricNumber - 300) * 2536) + (100 * 2536) + (100 * 2014) + (50 * 1734) + (50 * 1678)} `)
    } else {
        alert(`Tiền điện phải trả là: ${((electricNumber - 400) * 2927) + (100 * 2536) + (100 * 2536) + (100 * 2014) + (50 * 1734) + (50 * 1678)} `)
    }
}

console.log(eclectricBill());