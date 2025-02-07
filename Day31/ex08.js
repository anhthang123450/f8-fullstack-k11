const calcBtn = document.querySelector(".calcBtn");
const amountPay = document.querySelector(".amount-pay");
const totalMoney = document.querySelector(".total-money");
function calc() {
    const totalBill = parseFloat(document.querySelector(".total-bill").value);
    const people = parseInt(document.querySelector(".people").value);
    const moneyTips =
        parseFloat(document.querySelector(".money-tips").value) || 0;

    if (isNaN(totalBill) || totalBill <= 0) {
        return alert("Nhập số Bill hợp lệ!");
    }

    if (!Number.isInteger(people) || isNaN(people) || people <= 0) {
        return alert("Nhập số người hợp lệ!");
    }

    if (isNan(moneyTips) || moneyTips > totalBill) {
        return alert("Tiền tip phải nhỏ hơn bill");
    }

    const totalTips = totalBill + moneyTips;
    const amountPeople = totalTips / people;

    amountPay.textContent = `Tiền mỗi người: ${amountPeople.toFixed(2)} VND`;
    totalMoney.textContent = `Tổng tiền (bao gồm tip): ${totalTips.toFixed(
        2
    )} VND`;
}

calcBtn.addEventListener("click", calc);
