// Initialize slideshow indices
let wireframeIndex = 0;
let designIndex = 0;

// Start both slideshows
document.addEventListener('DOMContentLoaded', function() {
    showSlides('wireframes-slideshow', wireframeIndex);
    showSlides('design-slideshow', designIndex);
    
    // Set up auto-advance for both slideshows
    setInterval(function() {
        plusSlides('wireframes-slideshow', 1);
        plusSlides('design-slideshow', 1);
    }, 4000);
});

// Navigation function for both slideshows
function plusSlides(slideshowId, n) {
    if (slideshowId === 'wireframes-slideshow') {
        wireframeIndex += n;
        showSlides(slideshowId, wireframeIndex);
    } else {
        designIndex += n;
        showSlides(slideshowId, designIndex);
    }
}

// Display slides function
function showSlides(slideshowId, n) {
    const container = document.getElementById(slideshowId);
    const slides = container.getElementsByClassName("mySlides");
    
    // Update index for the specific slideshow
    if (n >= slides.length) n = 0;
    if (n < 0) n = slides.length - 1;
    
    if (slideshowId === 'wireframes-slideshow') {
        wireframeIndex = n;
    } else {
        designIndex = n;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show current slide
    slides[n].style.display = "block";
}
