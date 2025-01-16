const carts = [
    {
        id: 1,
        name: "T-Shirt",
        price: 100000,
        quantity: 2,
        hotSale: false,
    },
    {
        id: 2,
        name: "Jean",
        price: 200000,
        quantity: 1,
        hotSale: false,
    },
    {
        id: 3,
        name: "Skirt",
        price: 150000,
        quantity: 3,
        hotSale: true,
    },
    {
        id: 4,
        name: "Shirt",
        price: 120000,
        quantity: 2,
        hotSale: false,
    },
    {
        id: 5,
        name: "Jacket",
        price: 250000,
        quantity: 1,
        hotSale: true,
    },
];
function renderOrder(cart) {
    if (!Array.isArray(cart) || cart.length < 0) return "Invalid input";
    let content = "";
    cart.forEach((item) => {
        const highlight = item.hotSale ? "'color: red'" : null;
        const itemElement = /*html*/ `
    <tr>
      <td style = ${highlight}>${item.name}</td>
      <td style = ${highlight}>${item.price}</td>
      <td style = ${highlight}>${item.quantity}</td>
      <td style = ${highlight}>${item.quantity * item.price}</td>
    </tr>
    `;

        content += itemElement;
    });

    const totalCost = cart.reduce((total, cur) => {
        return (total += cur.price * cur.quantity);
    }, 0);

    content += `<tr>
    <td colspan="3">Tổng tiền</td>
    <td>${totalCost}</td>
    </tr>`;

    // thêm content vào body
    document.body.innerHTML = /*html*/ `
    <table>
      <thead>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </thead>
      <tbody>
        ${content}
      </tbody>
    </table>
    `;
}

renderOrder(carts);
