let resultInput = document.querySelector(".result");
const operation = document.querySelectorAll("#operation-tick");
const calcBtn = document.querySelector(".calcBtn");

function calc() {
    const num1 = parseFloat(document.querySelector(".num1").value);
    const num2 = parseFloat(document.querySelector(".num2").value);
    let result = 0;

    if (
        isNaN(num1) ||
        isNaN(num2) ||
        typeof num1 !== "number" ||
        typeof num2 !== "number"
    ) {
        return alert("Nhập lại số hợp lệ");
    }

    if (num1 === "" || num2 === "") {
        return alert("Mời nhập số, không được để trống");
    }

    operation.forEach((checkbox, index) => {
        if (checkbox.checked) {
            switch (index) {
                case 0:
                    result = num1 + num2;
                    break;
                case 1:
                    result = num1 - num2;
                    break;
                case 2:
                    result = num1 * num2;
                    break;
                case 3:
                    if (num2 === 0) {
                        alert("Không chia được cho số 0");
                        result = null;
                        return;
                    }
                    result = num1 / num2;
                    break;
            }
        }
    });
    resultInput.value = result;

    operation.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

calcBtn.addEventListener("click", calc);
