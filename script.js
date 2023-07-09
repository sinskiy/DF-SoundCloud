// DF SoundCloud

function main() {
    // individual
    // select
    let logo = document.querySelector(".header__logoLink")
        ?? document.querySelector(".peace-logo .header__logoLink")
        ?? document.querySelector(".logo");
    const rightMenu = document?.querySelector(".header__right");

    //delete
    logo.style.display = "none";
    if (rightMenu) rightMenu.style.display = "none";

    // multiple
    // select
    const everyLeftLink = document.querySelectorAll("a.header__navMenuItem");
    const dontDelete = "a[data-menu-name=library]";

    // delete
    everyLeftLink.forEach((link) => {
        if (link !== document.querySelector(dontDelete)) {
            link.style.display = "none";
        }
    });
}

//run every 1s
const checkHeader = setInterval(() => {
    main();
}, 1000);