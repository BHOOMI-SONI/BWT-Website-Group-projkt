// Main JavaScript for Pet Adoption Website

// Import pet data
import { getAllPets, getPetsBySpecies } from './Data/petData.js';

// Function to handle the navigation bar appearance on scroll and popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load random pets for the catalogue display
    loadRandomPets();
    
    // Function to load and display random pets in the catalogue
    function loadRandomPets() {
        // Try to get pets from the imported data
        try {
            const allPets = getAllPets();
            const petCardsContainer = document.querySelector('.pet-cards-container');
            
            // If we have pets data and the container exists
            if (allPets && allPets.length > 0 && petCardsContainer) {
                // Clear existing static cards
                petCardsContainer.innerHTML = '';
                
                // Get up to 4 random pets
                const randomPets = getRandomPets(allPets, 4);
                
                // Create and append pet cards
                randomPets.forEach(pet => {
                    const petCard = createPetCard(pet);
                    petCardsContainer.appendChild(petCard);
                });
            }
        } catch (error) {
            console.error('Error loading pet data:', error);
        }
    }
    
    // Function to get random pets from the array
    function getRandomPets(petsArray, count) {
        const shuffled = [...petsArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // Function to create a pet card element
    function createPetCard(pet) {
        const card = document.createElement('div');
        card.className = 'pet-card';
        
        card.innerHTML = `
            <div class="pet-card-image">
                <img src="${pet.imageUrl || ''}" alt="${pet.name}" 
                     onerror="this.src='https://via.placeholder.com/200x150?text=${pet.species}'">
            </div>
            <div class="pet-card-content">
                <h4>${pet.name}</h4>
                <p class="pet-description">${pet.description || 'Lovely pet looking for a home'}</p>
                <div class="pet-details">
                    <span class="pet-attribute">Size: ${pet.size || 'Medium'}</span>
                    <span class="pet-attribute">Energy: ${pet.energyLevel || 'Medium'}</span>
                </div>
                <a href="#" class="pet-adopt-btn">Learn More</a>
            </div>
        `;
        
        return card;
    }
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const getPetBtn = document.getElementById('getPetBtn');
    const petPopup = document.getElementById('petPopup');
    const getPetRecommendedBtn = document.getElementById('getPetRecommendedBtn');
    const viewCatalogueBtn = document.getElementById('viewCatalogueBtn');
    const catalogueSection = document.querySelector('section:nth-child(3)'); // The second section (Our Adorable Pets)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
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
    
    // Mobile menu toggle functionality
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when a nav link is clicked
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});