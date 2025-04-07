// Main JavaScript for Pet Adoption Website

// Function to handle the navigation bar appearance on scroll and popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const getPetBtn = document.getElementById('getPetBtn');
    const petPopup = document.getElementById('petPopup');
    const getPetRecommendedBtn = document.getElementById('getPetRecommendedBtn');
    const viewCatalogueBtn = document.getElementById('viewCatalogueBtn');
    const catalogueSection = document.querySelector('section:nth-child(3)'); // The second section (Our Adorable Pets)
    
    // Function to toggle navbar visibility based on scroll position
    function toggleNavbar() {
        // Get the height of the hero section
        const heroHeight = heroSection.offsetHeight;
        
        // Check if user has scrolled past the hero section
        if (window.scrollY > heroHeight * 0.8) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
    }
    
    // Function to open popup
    function openPopup() {
        petPopup.classList.add('active');
        document.body.classList.add('popup-active');
    }
    
    // Function to close popup
    function closePopup() {
        petPopup.classList.remove('active');
        document.body.classList.remove('popup-active');
    }
    
    // Event listeners for popup
    getPetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openPopup();
    });
    
    // Event listener for Get a Pet Recommended button
    getPetRecommendedBtn.addEventListener('click', function() {
        // This would typically lead to a pet recommendation form or algorithm
        // For now, we'll just close the popup
        alert('Pet recommendation feature coming soon!');
    });
    
    // Event listener for View Catalogue button
    viewCatalogueBtn.addEventListener('click', function() {
        closePopup();
        // Scroll to the catalogue section
        catalogueSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close popup when clicking outside the popup content
    petPopup.addEventListener('click', function(e) {
        if (e.target === petPopup) {
            closePopup();
        }
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleNavbar);
    
    // Call once on load to set initial state
    toggleNavbar();
});