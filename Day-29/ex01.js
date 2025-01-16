const menu = [
    {
        id: 1,
        name: "Home",
        parentId: 0,
    },
    {
        id: 2,
        name: "About",
        parentId: 0,
    },
    {
        id: 3,
        name: "News",
        parentId: 0,
    },
    {
        id: 4,
        name: "Products",
        parentId: 0,
    },
    {
        id: 5,
        name: "Contact",
        parentId: 0,
    },
    {
        id: 6,
        name: "T-Shirt",
        parentId: 4,
    },
    {
        id: 7,
        name: "Jean",
        parentId: 4,
    },
    {
        id: 8,
        name: "Skirt",
        parentId: 4,
    },
];

function menuList(menu, parentId = 0) {
    if (!Array.isArray(menu) || menu.length < 0) return "Invalid input";
    const items = menu.filter((item) => item.parentId === parentId);
    console.log(items);
    let menuItem = "<ul>";
    items.forEach((item) => {
        const fontSize = item.parentId === 0 ? "24px" : "20px";
        menuItem += /*html*/ `
        <li> 
        <a style = "font-size: ${fontSize}"  href = "#">${item.name}</a>
        ${menuList(menu, item.id)}
        </li>
    `;
    });
    menuItem += "</ul>";
    return menuItem;
}
const content = menuList(menu);
console.log(content);

document.body.innerHTML = /*html*/ `
  <div>
      ${content}
  </div>
`;
