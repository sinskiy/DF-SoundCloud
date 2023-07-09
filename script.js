// DF SoundCloud

// individual
// select
const logo = document.querySelector(".header__logoLink");
const rightMenu = document.querySelector(".header__right");

//delete
logo.style.display = "none";
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
})