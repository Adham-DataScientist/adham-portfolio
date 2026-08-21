document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Dark / Light Theme Toggle
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
        const icon = toggle.querySelector("i");

        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }
        }

        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                if (icon) {
                    icon.classList.remove("fa-moon");
                    icon.classList.add("fa-sun");
                }
            } else {
                localStorage.setItem("theme", "light");
                if (icon) {
                    icon.classList.remove("fa-sun");
                    icon.classList.add("fa-moon");
                }
            }
        });
    }

    // Language Selector & Translation
    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_certificates: "Certificates",
            nav_contact: "Contact",
            nav_cv: "Download CV",
            hero_hello: "Hello, I'm",
            hero_title: "Data Analyst",
            hero_desc: "Passionate about transforming raw data into meaningful business insights using Power BI, SQL, Excel and Python.",
            view_projects: "View Projects",
            contact_me: "Contact Me",
            about_p1: "I'm Adham Awad, a passionate Data Analyst with experience in Power BI, SQL, Excel and Python. I enjoy transforming raw data into clear dashboards that help businesses make better decisions.",
            about_p2: "My goal is to build professional business intelligence solutions and continuously improve my analytical skills.",
            demo_btn: "🚀 Live Demo",
            code_btn: "💻 GitHub",
            view_cert: "👁️ View Certificate",
            contact_email: "Email",
            visit_profile: "Visit Profile",
            footer_text: "© 2026 Adham Awad | Data Analyst Portfolio"
        },
        ar: {
            nav_home: "الرئيسية",
            nav_about: "نبذة عني",
            nav_skills: "المهارات",
            nav_projects: "المشاريع",
            nav_certificates: "الشهادات",
            nav_contact: "تواصل معي",
            nav_cv: "تحميل السيرة الذاتية",
            hero_hello: "أهلاً بك، أنا",
            hero_title: "محلل بيانات",
            hero_desc: "شغوف بتحويل البيانات الخام إلى رؤى تحليلية واستراتيجية قيمة باستخدام Power BI و SQL و Excel و Python.",
            view_projects: "عرض المشاريع",
            contact_me: "تواصل معي",
            about_p1: "أنا أدهم عوض، محلل بيانات متخحصص يمتلك خبرة في Power BI و SQL و Excel و Python. أستمتع بتحويل البيانات المعقدة إلى لوحات تحكم تفاعلية مساعدة في اتخاذ القرارات.",
            about_p2: "هدفي هو بناء حلول ذكاء أعمال احترافية وتطوير مهاراتي التحليلي باستمرار.",
            demo_btn: "🚀 التجربة الحية",
            code_btn: "💻 الكود المصدري",
            view_cert: "👁️ عرض الشهادة",
            contact_email: "البريد الإلكتروني",
            visit_profile: "زيارة الملف الشخصي",
            footer_text: "© 2026 أدهم عوض | ملف الأعمال الشخصي"
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
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        const langBtn = document.getElementById('lang-btn');
        if (langBtn) {
            langBtn.innerHTML = lang === 'en' ? '<i class="fas fa-language"></i> AR' : '<i class="fas fa-language"></i> EN';
        }
    }

    setLanguage(currentLang);

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }

    // Scroll Top Button
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Header Shadow on Scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
            } else {
                header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
            }
        }
    });

    // Intersection Observer for Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const allSections = document.querySelectorAll('section');
const allNavLinks = document.querySelectorAll('header nav ul li a');

allSections.forEach(section => {

    section.addEventListener('mouseenter', () => {
        const id = section.getAttribute('id');
        
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    });
});