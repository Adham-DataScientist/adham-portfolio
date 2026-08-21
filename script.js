
document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

        });

    });

});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


const toggle = document.getElementById("theme-toggle");

if(toggle){

    const icon = toggle.querySelector("i");

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

    toggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }else{

            localStorage.setItem("theme","light");

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}



const topBtn=document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });
}
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        projects_title: "Featured AI & Data Science Projects",
        demo_btn: "🚀 Live Demo",
        code_btn: "💻 GitHub"
    },
    ar: {
        nav_about: "نبذة عني",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",
        projects_title: "أبرز مشاريع الذكاء الاصطناعي وعلوم البيانات",
        demo_btn: "🚀 التجربة الحية",
        code_btn: "💻 الكود المصدري"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'AR' : 'EN';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }
});