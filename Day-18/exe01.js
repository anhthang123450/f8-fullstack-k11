let salary = +prompt("Nhập tiền lương: ")
function personalTax() {
    if (salary <= 11000000) {
        alert("Không tính thuế");
    } else if (salary <= 25000000) {
        alert(` tiền thuế phải trả là ${salary * 0.05} vnđ`);
    } else if (salary <= 50000000) {
        alert(` Tiền thuế phải trả là ${salary * 0.1} vnđ`)
    } else if (salary <= 80000000) {
        alert(` Tiền thuế phải trả là ${salary * 0.2} vnđ`)
    } else {
        alert(` Tiền thuế phải trả là ${salary * 0.3} vnđ`)
    }
}
console.log(personalTax());

/**
 *  Khoản thu nhập <= 11 triệu: Không tính thuế.
    Khoản thu nhập từ trên 11 triệu đến 25 triệu: 5% thuế.
    Khoản thu nhập từ trên 25 triệu đến 50 triệu: 10% thuế.
    Khoản thu nhập từ trên 50 triệu đến 80 triệu: 20% thuế.
    Khoản thu nhập từ trên 80 triệu: 30% thuế.
 */