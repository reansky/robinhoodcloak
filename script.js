/* =====================================================
   ROBINHOOD CLOAK V2
   MAIN SCRIPT
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 1200);

});


/* ===========================
COPY CONTRACT
=========================== */

function copyCA() {

    if (!window.CONFIG) return;

    navigator.clipboard.writeText(CONFIG.TOKEN.CONTRACT);

    alert("Contract copied!");

}


/* ===========================
SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================
TERMINAL BUTTON
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const terminalBtn =
        document.getElementById(
            "terminal-toggle-floating"
        );

    const terminalOverlay =
        document.getElementById(
            "terminal-overlay"
        );

    const terminalClose =
        document.getElementById(
            "terminal-close"
        );

    if (terminalBtn && terminalOverlay) {

        terminalBtn.addEventListener("click", () => {

            terminalOverlay.classList.add("active");

            if (window.Terminal) {

                Terminal.open();

            }

        });

    }

    if (terminalClose && terminalOverlay) {

        terminalClose.addEventListener("click", () => {

            terminalOverlay.classList.remove("active");

        });

    }

});


/* ===========================
SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =

                "translateY(0px)";

        }

    });

}, {

    threshold: .15

});


document.querySelectorAll(

    ".market-card,.feature-card,.about-card"

).forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".6s";

    observer.observe(card);

});


console.log("✅ Robinhood Cloak V2 Loaded");


/* ===========================
SCROLL EFFECT
=========================== */

const progressBar =
document.getElementById("progress-bar");

const topButton =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

const scroll=
document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const progress=(scroll/height)*100;

if(progressBar){

progressBar.style.width=
progress+"%";

}

if(topButton){

topButton.style.display=
scroll>350?"flex":"none";

}

});


if(topButton){

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* ===========================
NAVBAR SHRINK
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

if(window.scrollY>80){

navbar.style.padding="6px 0";

navbar.style.background="rgba(0,0,0,.72)";

}else{

navbar.style.padding="0";

navbar.style.background="rgba(0,0,0,.35)";

}

});
