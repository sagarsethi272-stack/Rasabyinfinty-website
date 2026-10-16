// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if(navLinks.classList.contains("open")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }else{
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


// ===============================
// STICKY NAVBAR
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 70){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

});


// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold:0.15
    }

);

reveals.forEach((element) => {
    observer.observe(element);
});


// ===============================
// CLOSE MOBILE MENU
// ===============================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        if(navLinks){
            navLinks.classList.remove("open");
        }

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Thank you! Your enquiry has been recorded. Connect this form to WhatsApp or email before publishing the website."
        );

        contactForm.reset();

    });

}