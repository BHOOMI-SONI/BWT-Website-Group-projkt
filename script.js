// Main JavaScript for Pet Adoption Website

// Import pet data
import { getAllPets, getPetsBySpecies } from './Data/petData.js';

// Function to handle the navigation bar appearance on scroll and popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load random pets for the catalogue display
    loadRandomPets();
    
    // Function to load and display pets in the catalogue
    // DEVELOPER NOTE: This function populates the pet cards from petData.js
    // To add more pets, update the petsBySpecies object in Data/petData.js
    // with proper pet information following the existing structure
    function loadRandomPets() {
        // Try to get pets from the imported data
        try {
            const allPets = getAllPets();
            const petCardsContainer = document.querySelector('.pet-cards-container');
            
            // If we have pets data and the container exists
            if (allPets && petCardsContainer) {
                // Clear existing static cards
                petCardsContainer.innerHTML = '';
                
                // If we have pets in the data file, display them
                if (allPets.length > 0) {
                    // Get up to 8 random pets to display
                    const randomPets = getRandomPets(allPets, 8);
                    
                    // Create and append pet cards
                    randomPets.forEach(pet => {
                        const petCard = createPetCard(pet);
                        petCardsContainer.appendChild(petCard);
                    });
                } else {
                    // If no pets data is available, create placeholder cards
                    for (let i = 0; i < 8; i++) {
                        const placeholderPet = {
                            name: "Data not present",
                            description: "Pet data will be loaded from petData.js when available",
                            size: "Unknown",
                            energyLevel: "Unknown"
                        };
                        const petCard = createPetCard(placeholderPet);
                        petCardsContainer.appendChild(petCard);
                    }
                }
            }
        } catch (error) {
            console.error('Error loading pet data:', error);
            // If error occurs, create placeholder cards
            createPlaceholderCards();
        }
    }
    
    // Function to create placeholder cards when data is not available
    function createPlaceholderCards() {
        const petCardsContainer = document.querySelector('.pet-cards-container');
        if (petCardsContainer) {
            petCardsContainer.innerHTML = '';
            for (let i = 0; i < 8; i++) {
                const placeholderPet = {
                    name: "Data not present",
                    description: "Pet data will be loaded from petData.js when available",
                    size: "Unknown",
                    energyLevel: "Unknown"
                };
                const petCard = createPetCard(placeholderPet);
                petCardsContainer.appendChild(petCard);
            }
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
                     onerror="this.src='images/work-in-progress.svg'">
            </div>
            <div class="pet-card-content">
                <h4>${pet.name}</h4>
                <p class="pet-description">${pet.description || 'Lovely pet looking for a home'}</p>
                <div class="pet-details">
                    <span class="pet-attribute">Size: ${pet.size || 'Medium'}</span>
                    <span class="pet-attribute">Energy: ${pet.energyLevel || 'Medium'}</span>
                </div>
                <a href="javascript:void(0);" class="pet-adopt-btn">Learn More</a>
            </div>
        `;
        
        // Add event listener to the Learn More button
        const learnMoreBtn = card.querySelector('.pet-adopt-btn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Import and use the openPetModal function
                import('./modal.js').then(module => {
                    module.openPetModal(pet);
                }).catch(err => {
                    console.error('Error opening pet modal:', err);
                });
            });
        }
        
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
    
    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
    
    // Handle dropdown toggles
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Check if we're on mobile
            const isMobile = window.innerWidth <= 768;
            
            // Toggle active class for this dropdown
            const isActive = dropdown.classList.contains('active');
            
            // On mobile, we want to allow multiple dropdowns to be open
            // On desktop, we close all other dropdowns
            if (!isMobile) {
                closeAllDropdowns();
            }
            
            // Toggle the clicked dropdown
            if (isActive) {
                dropdown.classList.remove('active');
            } else {
                dropdown.classList.add('active');
            }
        });
    });
    
    // Update dropdown behavior on window resize
    window.addEventListener('resize', function() {
        // If we're switching to desktop view, close all dropdowns
        if (window.innerWidth > 768) {
            closeAllDropdowns();
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        closeAllDropdowns();
    });
    
    // Prevent dropdown menu clicks from closing the dropdown
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
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
            
            // Close all dropdowns when toggling the mobile menu
            if (!navLinks.classList.contains('active')) {
                closeAllDropdowns();
            }
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