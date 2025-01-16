function countElements(tagName) {
    if (typeof tagName !== "string") return;
    return document.getElementsByTagName(tagName).length;
}

console.log(countElements("div")); // 10
console.log(countElements("p")); // 5
console.log(countElements(133)); // undefined
