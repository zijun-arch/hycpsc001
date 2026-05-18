// Main JS — smooth scroll, nav effects, animations
document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(42, 28, 20, 0.95)';
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.12)';
      } else {
        navbar.style.background = 'rgba(42, 28, 20, 0.85)';
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
      }
    });
  }

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.brand-card, .about-card, .product-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});
