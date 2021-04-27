function loadScript(src, callback) {
    const el = document.createElement("script");
    el.type = "module";
    el.src = src;
    el.onload = callback;
    // el.addEventListener("load", callback); //то же самое, что и верхняя строка

    document.body.appendChild(el);
}

loadScript("src/main.js", () => {
    console.log("Script loaded");
});

console.log("Built with webpack");