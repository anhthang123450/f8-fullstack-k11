const newProducts = [];
const products = [
    {
        id: 1,
        name: "Apple iPhone 12",
        price: 1000,
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 900,
    },
    {
        id: 3,
        name: "Xiaomi Mi 11",
        price: 800,
    },
    {
        id: 4,
        name: "Apple iPhone 11",
        price: 700,
    },
    {
        id: 5,
        name: "Samsung Galaxy S20",
        price: 600,
    },
    {
        id: 6,
        name: "Xiaomi Mi 10",
        price: 500,
    },
];

function getTopProducts(products, top) {
    let topProducts = [];

    products.forEach(product => {
        topProducts.push(product);
        if (topProducts.length > top) {
            let minProduct = 0;

            topProducts.forEach((item, index) => {
                if (item.price < topProducts[minProduct].price) {
                    minProduct = index;
                }
            });
            topProducts.splice(minProduct, 1);
        }
    });
    for (let i = 0; i < topProducts.length - 1; i++) {
        for (let j = i + 1; j < topProducts.length; j++) {
            if (topProducts[i].price < topProducts[j].price) {
                let temp = topProducts[i];
                topProducts[i] = topProducts[j];
                topProducts[j] = temp;
            }
        }
    }
    return topProducts;
}

console.log(getTopProducts(products, 3));



