
/*
    burger menu
*/

function showSidebar() {
    const burgerHorizontal = document.querySelector('#burger-icon-horizontal');
    const burgerVertical = document.querySelector('#burger-icon-vertical');
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.right = 0;
    burgerHorizontal.style.display = 'none';
    burgerVertical.style.display = 'block';
}

function hideSidebar() {
    const burgerHorizontal = document.querySelector('#burger-icon-horizontal');
    const burgerVertical = document.querySelector('#burger-icon-vertical');
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.right = '-600px';
    burgerHorizontal.style.display = 'block';
    burgerVertical.style.display = 'none';
}


/*
    typing animation
*/
const typed = new Typed(".auto-type", {
        strings: ['ideas', 'new places', 'color palettes', 'inspiration', 'new friends', 'stuff'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
    })

/*
    button to get to top of the page
*/

const scrollToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) { // Show after 300px of scroll
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, // Scroll to the top
        behavior: "smooth" // Smooth scrolling
    });
});

/*
    code to take animated text from its container and put it in another
*/

const animation = document.getElementById("always-in-search-animation");
const container1 = document.getElementById("topnav");
const container2 = document.getElementById("main-page-right-container");
const mediaQuery = window.matchMedia("(max-width: 1600px)");

function handleMediaChange(e) {
    if (e.matches) {
        if (container2.contains(animation) === false) {
            container2.appendChild(animation);
        }
    } else {
        if (container1.contains(animation) === false) {
            container1.appendChild(animation);
        }
    }
}

mediaQuery.addEventListener("change", handleMediaChange);
handleMediaChange(mediaQuery);

/*
    updating text in the footer for smaller screens
*/

function updateParagraphContent() {
    const paragraph = document.getElementById("footer-p");

    if (window.matchMedia("(max-width: 480px)").matches) {
        paragraph.innerHTML = "This web-page was created as a <br>\n" +
            "demo project strictly for <br>\n" +
            "non-commercial use. It will be used <br>\n" +
            "as an application assignment for<br>\n" +
            "{Hack Your Future}.";
    } else {
        paragraph.innerHTML = "This web-page was created as a demo project<br>\n" +
            "                strictly for non-commercial use. It will be<br>\n" +
            "                used as an application assignment for<br>\n" +
            "                {Hack Your Future}.";
    }
}

updateParagraphContent();
window.addEventListener("resize", updateParagraphContent);
