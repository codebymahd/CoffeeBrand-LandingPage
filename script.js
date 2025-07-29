// === Sticky Navbar Shadow on Scroll ===
// window.addEventListener('scroll', () => {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 50) {
//     navbar.classList.add('navbar-shadow');
//   } else {
//     navbar.classList.remove('navbar-shadow');
//   }
// });

// === Smooth Scroll for Anchor Links ===
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   });
// });

// === CTA Button Bounce on Click ===
// const ctaBtn = document.querySelector('.cta-btn');
// ctaBtn.addEventListener('click', () => {
//   ctaBtn.classList.add('bounce');
//   setTimeout(() => {
//     ctaBtn.classList.remove('bounce');
//   }, 1000);
// });

// ==== Scroll Reveal for Product Cards ====
// const revealElements = document.querySelectorAll('.product-card');

// const revealOnScroll = () => {
//   const triggerBottom = window.innerHeight * 0.85;

//   revealElements.forEach(card => {
//     const cardTop = card.getBoundingClientRect().top;

//     if (cardTop < triggerBottom) {
//       card.classList.add('show');
//     } else {
//       card.classList.remove('show');
//     }
//   });
// };

// window.addEventListener('scroll', revealOnScroll);
// window.addEventListener('load', revealOnScroll);

// ==== FAQ Accordion Toggle ====
// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach(item => {
//   const question = item.querySelector('.faq-question');

//   question.addEventListener('click', () => {
//     // Close all other active items
//     faqItems.forEach(i => {
//       if (i !== item) {
//         i.classList.remove('active');
//       }
//     });

    // Toggle current item
//     item.classList.toggle('active');
//   });
// });

// ==== Smooth Scroll for Anchor Links ====
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }
//   });
// });

// ==== Scroll Reveal Animation ====
// const revealItems = document.querySelectorAll('.hidden');

// function revealOnScroll() {
//   const triggerBottom = window.innerHeight * 0.85;

//   revealItems.forEach(item => {
//     const top = item.getBoundingClientRect().top;

//     if (top < triggerBottom) {
//       item.classList.add('show');
//     } else {
//       item.classList.remove('show');
//     }
//   });
// }

// window.addEventListener('scroll', revealOnScroll);
// window.addEventListener('load', revealOnScroll);

// ==== FAQ Accordion ====
// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach(item => {
//   const btn = item.querySelector('.faq-question');

//   btn.addEventListener('click', () => {
//     faqItems.forEach(i => {
//       if (i !== item) i.classList.remove('active');
//     });
//     item.classList.toggle('active');
//   });
// });

// Wait until DOM is loaded
// window.addEventListener('DOMContentLoaded', () => {
//   const faqItems = document.querySelectorAll('.faq-item');

//   faqItems.forEach(item => {
//     const btn = item.querySelector('.faq-question');

//     btn.addEventListener('click', () => {
//       faqItems.forEach(i => {
//         if (i !== item) i.classList.remove('active');
//       });
//       item.classList.toggle('active');
//     });
//   });
// });

// ==== Smooth Scroll ====
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   });
// });
