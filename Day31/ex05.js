const categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
        slug: "chuyen-muc-1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
        slug: "chuyen-muc-2",
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
        slug: "chuyen-muc-3",
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
        slug: "chuyen-muc-2-1",
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
        slug: "chuyen-muc-2-2",
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
        slug: "chuyen-muc-2-3",
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
        slug: "chuyen-muc-3-1",
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
        slug: "chuyen-muc-3-2",
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
        slug: "chuyen-muc-3-3",
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
        slug: "chuyen-muc-2-2-1",
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
        slug: "chuyen-muc-2-2-2",
    },
];

const menu = document.querySelector(".menu");

const catNested = convertNested(categories);
function convertNested(categories, parent = 0) {
    return categories
        .filter((cat) => cat.parent === parent)
        .map((cat) => ({
            ...cat,
            children: convertNested(categories, cat.id),
        }));
}

function renderMenu(categories) {
    let ul = document.createElement("ul");
    ul.classList.add("sub-menu");

    categories.forEach((cat) => {
        let li = document.createElement("li");
        li.textContent = cat.name;

        if (cat.children.length > 0) {
            li.classList.add("parent");
            li.appendChild(renderMenu(cat.children));
        }

        ul.appendChild(li);
    });

    return ul;
}

catNested.forEach((cat) => {
    let li = document.createElement("li");
    li.textContent = cat.name;
    li.classList.add("parent");

    if (cat.children.length > 0) {
        li.appendChild(renderMenu(cat.children));
    }

    menu.appendChild(li);
});
