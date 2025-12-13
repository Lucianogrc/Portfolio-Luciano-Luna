// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal on scroll (lo que ya tenías)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .hero-text')
  .forEach(el => observer.observe(el));


// ===============================
// NAV ACTIVE LINK ON SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );

        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6
  }
);

// observar cada sección
sections.forEach(section => navObserver.observe(section));

// marcar Home activo al cargar
document.querySelector('.nav-links a[href="#home"]').classList.add("active");
