document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");
  
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
  
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });
  
    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
  
    // Adicionando a revelação de elementos conforme necessário
    ScrollReveal().reveal(".fade-in", {
      ...scrollRevealOption,
      interval: 300,
    });
  
    ScrollReveal().reveal(".parcerias h2, .parcerias p, .parcerias a", {
      ...scrollRevealOption,
      delay: 500,
      interval: 200,
    });
  
    ScrollReveal().reveal(".marcas h2, .marcas .swiper-container, .marcas .swiper-wrapper, .marcas .swiper-slide, .marcas .swiper-pagination", {
      ...scrollRevealOption,
      delay: 500,
      interval: 200,
    });
  
    ScrollReveal().reveal(".veja_como h2, .veja_como p", {
      ...scrollRevealOption,
      delay: 500,
      interval: 200,
    });
  
    ScrollReveal().reveal(".project__container, .project__grid, .project__card", {
      ...scrollRevealOption,
      interval: 300,
    });
  
    ScrollReveal().reveal(".project__card__details, .project__card__content, .project__card__content_two, .project__card__content_three", {
      ...scrollRevealOption,
      interval: 300,
    });
  
    ScrollReveal().reveal(".job-description h1, .job-description h2, .job-description p, .salary-container, .elementor-counter-number-wrapper, .elementor-counter-number", {
      ...scrollRevealOption,
      delay: 500,
      interval: 300,
    });
  
    ScrollReveal().reveal(".login-section", {
      ...scrollRevealOption,
      delay: 2000,
    });
  });

