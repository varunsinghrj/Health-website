// Navbar Toggle for Mobile View
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Chatbot Button Click Event
const chatbotBtn = document.querySelector('.chatbot-btn');
chatbotBtn.addEventListener('click', () => {
    // Placeholder action for chatbot integration
    alert('Chatbot feature coming soon!');
    // Integrate your chatbot widget code here
});
// Animation on Scroll for the Home Section
window.addEventListener('scroll', () => {
    const homeSection = document.querySelector('.home-section');
    const sectionPosition = homeSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        homeSection.classList.add('active');
    } else {
        homeSection.classList.remove('active');
    }
});
// Animation on Scroll for Health Tips Section
window.addEventListener('scroll', () => {
    const healthTipsSection = document.querySelector('.health-tips-section');
    const sectionPosition = healthTipsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        healthTipsSection.classList.add('active');
    } else {
        healthTipsSection.classList.remove('active');
    }
});
// Animation on Scroll for Featured Services, Events, and FAQs Sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.featured-services-section, .events-section, .faqs-section');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

