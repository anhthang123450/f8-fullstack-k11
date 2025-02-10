const categories = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        children: [
            {
                id: 2,
                name: "Laptops",
                slug: "laptops",
                children: [
                    {
                        id: 3,
                        name: "Apple",
                        slug: "apple",
                    },
                    {
                        id: 4,
                        name: "Dell",
                        slug: "dell",
                    },
                ],
            },
            {
                id: 5,
                name: "Headphones",
                slug: "headphones",
            },
        ],
    },
    {
        id: 6,
        name: "Books",
        slug: "books",
        children: [
            {
                id: 7,
                name: "Fiction",
                slug: "fiction",
                children: [
                    {
                        id: 8,
                        name: "Thrillers",
                        slug: "thrillers",
                    },
                    {
                        id: 9,
                        name: "Mystery",
                        slug: "mystery",
                    },
                ],
            },
            {
                id: 10,
                name: "Non-Fiction",
                slug: "non-fiction",
            },
        ],
    },
];

const menu = document.querySelector(".menu");

function flattenCategories(categories) {
    let ul = document.createElement("ul");
    ul.classList.add("sub-menu");
    categories.forEach((cat) => {
        let li = document.createElement("li");
        li.textContent = cat.name;

        if (cat.children && cat.children.length > 0) {
            li.classList.add("parent");
            li.appendChild(flattenCategories(cat.children));
        }

        ul.appendChild(li);
    });

    return ul;
}

categories.forEach((cat) => {
    {
        let li = document.createElement("li");
        li.textContent = cat.name;
        li.classList.add("parent");

        if (cat.children && cat.children.length > 0) {
            li.appendChild(flattenCategories(cat.children));
        }

        menu.appendChild(li);
    }
});
