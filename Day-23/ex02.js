const categories = [
    {
        id: 1,
        name: "Electronics",
        children: [
            {
                id: 2,
                name: "Laptops",
                children: [
                    {
                        id: 3,
                        name: "Apple",
                    },
                    {
                        id: 4,
                        name: "Dell",
                    },
                ],
            },
            {
                id: 5,
                name: "Headphones",
            },
        ],
    },
    {
        id: 6,
        name: "Books",
        children: [
            {
                id: 7,
                name: "Fiction",
                children: [
                    {
                        id: 8,
                        name: "Thrillers",
                    },
                    {
                        id: 9,
                        name: "Mystery",
                    },
                ],
            },
            {
                id: 10,
                name: "Non-Fiction",
            },
        ],
    },
];

function flattenCategories(categories, level = 0) {
    let result = [];
    categories.forEach(category => {
        result.push({ id: category.id, name: category.name, level });
        if (category.children) {
            result = result.concat(flattenCategories(category.children, level + 1));
        }
    });
    return result;
}

function getCategoryName(categories, categoryId) {
    const flatCategories = flattenCategories(categories);
    const category = flatCategories.find(cat => cat.id === categoryId);
    return category ? category.name : null;
}

console.log(flattenCategories(categories));

console.log(getCategoryName(categories, 3)); // Output: "Apple"
console.log(getCategoryName(categories, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(categories, 99)); // Output: null