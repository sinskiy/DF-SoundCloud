// DF SoundCloud

function main() {
    // individual
    // select
    const rightMenu = document.querySelector(".header__right");

    //delete
    // i need to use this crazy tertiary operator because logo can change during the usage
    document.querySelector(".header__logoLink")
     ? document.querySelector(".header__logoLink").style.display = "none"
     : document.querySelector(".peace-logo .header__logoLink").style.display = "none";

    rightMenu.style.display = "none";

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

// run on page load
main();

//run every 1s
const checkHeader = setInterval(() => {
    main();
}, 1000);