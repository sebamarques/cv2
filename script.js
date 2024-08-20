document.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    const navbarLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navbarLinks.forEach(link => link.classList.remove('activo'));
            navbarLinks[index].classList.add('activo');
        }
    });
});
