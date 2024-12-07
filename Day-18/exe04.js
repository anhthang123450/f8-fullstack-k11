let weight = parseFloat(prompt("Nhập cân nặng"));
let height = parseFloat(prompt("Nhập chiều cao"));
function bmiValue() {
    bmiValue = weight / (height * height);
    if (bmiValue < 18.5) {
        alert(`BMI = ${bmiValue} => Thiếu cân`);
    } else if (bmiValue >= 18.5 && bmiValue < 23) {
        alert(`BMI = ${bmiValue} => Bình thường`);
    } else if (bmiValue >= 23 && bmiValue < 25) {
        alert(`BMI = ${bmiValue} => Thừa cân`);
    } else if (bmiValue >= 25) {
        alert(`BMI = ${bmiValue} => Béo phì`);
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
console.log(bmiValue());