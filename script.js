// ===========================
// Smooth Scroll
// ===========================

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//     anchor.addEventListener("click", function (e) {

//         e.preventDefault();

//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });

//     });

// });


// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");
    observer.observe(section);

});


// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});










// Typing Animation

const words = [
    "Aspiring Software Developer",
    "Frontend Developer",
    "JavaScript Learner",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing");

function type() {

    if (charIndex < words[wordIndex].length) {

        typingText.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1800);

    }

}

function erase() {

    if (charIndex > 0) {

        typingText.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(type, 400);

    }

}

type();

window.addEventListener("load",()=>{

let loader = document.querySelector(".loader");

if(loader){
    loader.style.display="none";
}

});
