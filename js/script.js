// SCROLL
window.onscroll = function () {
    scrollFunction();scrollAnimation();
};

function scrollFunction() {
    if (window.matchMedia("(min-width: 1025px)").matches && window.matchMedia("(max-width: 1500px)").matches) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".nav_desktop").style.height = "10rem";
            document.querySelector(".nav_desktop ul").style.paddingTop = "3%";
            document.querySelector(".nav_desktop").style.backgroundColor = "var(--color-blue)";
        } else {
            document.querySelector(".nav_desktop").style.height = "20rem";
            document.querySelector(".nav_desktop ul").style.paddingTop = "6%";
            document.querySelector(".nav_desktop").style.backgroundColor = "transparent";
        }

    }
    if (window.matchMedia("(min-width: 1500px)").matches) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".nav_desktop").style.height = "10rem";
            document.querySelector(".nav_desktop ul").style.paddingTop = "1.5%";
            document.querySelector(".nav_desktop").style.backgroundColor = "var(--color-blue)";
        } else {
            document.querySelector(".nav_desktop").style.height = "20rem";
            document.querySelector(".nav_desktop ul").style.paddingTop = "6%";
            document.querySelector(".nav_desktop").style.backgroundColor = "transparent";
        }

    }

    if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1024px)").matches) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".menuIcon").style.visibility = "visible";
            document.querySelector(".menuIcon").style.opacity = "1";
            document.querySelector(".nav_desktop_logo").style.width = "150px";
            document.querySelector(".nav_desktop").style.height = "15rem";
            document.querySelector(".nav_desktop").style.backgroundColor = "var(--color-blue)";
        } else {
            document.querySelector(".menuIcon").style.visibility = "hidden";
            document.querySelector(".menuIcon").style.opacity = "0";
            document.querySelector(".nav_desktop_logo").style.width = "200px";
            document.querySelector(".nav_desktop").style.height = "20rem";
            document.querySelector(".nav_desktop").style.backgroundColor = "transparent";
        }

    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".menuIcon").style.visibility = "visible";
            document.querySelector(".menuIcon").style.opacity = "1";
            document.querySelector(".nav_desktop_logo").style.width = "90px";
            document.querySelector(".nav_desktop").style.height = "8rem";
            document.querySelector(".nav_desktop").style.backgroundColor = "var(--color-blue)";
        } else {
            document.querySelector(".menuIcon").style.visibility = "hidden";
            document.querySelector(".menuIcon").style.opacity = "0";
            document.querySelector(".nav_desktop_logo").style.width = "180px";
            document.querySelector(".nav_desktop").style.height = "15rem";
            document.querySelector(".nav_desktop").style.backgroundColor = "transparent";
        }

    }
}

function scrollAnimation(){
    if (window.matchMedia("(min-width: 1025px)").matches) {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.querySelector(".image_fish_1").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_1").style.transform = "translateX(-150%)";
    }
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.querySelector(".image_fish_2").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_2").style.transform = "translateX(150%)";
    }
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.querySelector(".image_fish_3").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_3").style.transform = "translateX(-150%)";
    }
}

if (window.matchMedia("(min-width: 769px)").matches && window.matchMedia("(max-width: 1024px)").matches) {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.querySelector(".image_fish_1").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_1").style.transform = "translateX(-150%)";
    }
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.querySelector(".image_fish_2").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_2").style.transform = "translateX(150%)";
    }
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.querySelector(".image_fish_3").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_3").style.transform = "translateX(-150%)";
    }
}

if (window.matchMedia("(max-width: 769px)").matches) {
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        document.querySelector(".image_fish_1").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_1").style.transform = "translateX(-150%)";
    }
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.querySelector(".image_fish_2").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_2").style.transform = "translateX(150%)";
    }
    if (document.body.scrollTop > 2450 || document.documentElement.scrollTop > 2450) {
        document.querySelector(".image_fish_3").style.transform = "translateX(0)";
    } else {
        document.querySelector(".image_fish_3").style.transform = "translateX(-150%)";
    }
}

}

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.nav_mobile');
let nav_menu = document.querySelector('.nav_mobile_menu');
let nav_button = document.querySelector('#close_btn');


function myFunction() {
    nav.style.animation = "animateBack 2s forwards 0s";
    nav_menu.style.transform = "translateY(130vh)";
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
}

function changeImg(img) {
   img.src = "../img/logo-anima-hover.jpg";
}

function ScrollToAnima() {
    document.getElementById("scroll_anima").scrollIntoView({behavior: "smooth"});
}

function ScrollToAbout() {
        document.getElementById("about").scrollIntoView({behavior: "smooth"});
}
function ScrollToHome() {
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
}
function ScrollToPetition() {
    document.getElementById("petition").scrollIntoView({behavior: "smooth"});
}




menuIcon.addEventListener('click', () => {
    if (nav_menu.style.transform != "translateY(0vh)") {
        nav.style.visibility = "visible";
        nav_menu.style.transform = "translateY(0vh)";
        nav.style.animation = "animate 4s forwards 0s";
        nav_menu.style.transition = "1.2s ease-in-out";
    } else {
        nav.style.animation = "animateBack 2s forwards 0s";
        nav_menu.style.transform = "translateY(130vh)";
    }
});

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});
