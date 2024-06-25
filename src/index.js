import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


// for navbar

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Smooth scrolling when clicking on navigation links
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Add active class to navigation links based on scroll position
    window.addEventListener('scroll', function() {
      let fromTop = window.scrollY + 50; // Adjust based on your layout
      navLinks.forEach(function(navLink) {
        const section = document.getElementById(navLink.getAttribute('href').substring(1));
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          // Remove active class from all links
          navLinks.forEach(link => link.classList.remove('active'));
          // Add active class to the current link
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    });
  });
