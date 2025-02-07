const descriptions = {
    1: "Bạn là người độc lập, mạnh mẽ và có khả năng lãnh đạo. Bạn có tư duy sáng tạo và luôn tìm cách đạt được mục tiêu của mình.",
    2: "Bạn là người hòa đồng, nhạy bén và biết lắng nghe. Bạn rất giỏi trong việc xây dựng mối quan hệ và hợp tác.",
    3: "Bạn sáng tạo, lạc quan và luôn tràn đầy năng lượng. Bạn có khả năng giao tiếp tốt và dễ dàng làm quen với mọi người.",
    4: "Bạn là người thực tế, có tổ chức và làm việc chăm chỉ. Bạn có khả năng xây dựng nền tảng vững chắc trong công việc và cuộc sống.",
    5: "Bạn thích tự do, thích khám phá và là người thích mạo hiểm. Bạn có thể đối mặt với thử thách và luôn tìm kiếm sự thay đổi.",
    6: "Bạn quan tâm đến gia đình, yêu thương và chăm sóc người khác. Bạn là người sống trách nhiệm và luôn quan tâm đến những người thân yêu.",
    7: "Bạn là người thích suy ngẫm, nghiên cứu và khám phá. Bạn có khả năng phân tích và thích sự yên tĩnh.",
    8: "Bạn là người kiên trì, có tham vọng và luôn nỗ lực hết mình. Bạn có sức mạnh và khả năng lãnh đạo trong mọi lĩnh vực.",
    9: "Bạn là người có tấm lòng nhân ái, giúp đỡ và quan tâm đến người khác. Bạn có tính cách giàu tình cảm và thích giúp đỡ cộng đồng.",
};

const btn = document.querySelector(".btn");
// console.log(btn);
function sum(n) {
    return toString()
        .split("")
        .map(Number)
        .reduce((sum, digit) => sum + +digit, 0);
}

function calc(e) {
    e.preventDefault();
    const birthDate = document.querySelector("#birthdate").value;
    const result = document.querySelector(".result");
    const desc = document.querySelector(".desc");
    // console.log(birthDate, result, desc);
    let total = 0;
    if (!birthDate) {
        alert("Vui lòng nhập ngày tháng năm sinh");
        return;
    }
    const [year, mon, day] = birthDate.split("-").map(Number);

    total = sum(year) + sum(mon) + sum(day);

    while (total > 9) {
        total = sum(total);
    }

    result.innerHTML = `Số chủ đạo của bạn là ${total} `;
    desc.innerHTML = `${descriptions[total]}`;
}

btn.addEventListener("click", calc);
