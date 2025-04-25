/**
 * Pet Utilities for Snug Buddies Pet Adoption Website
 * This file contains utility functions for loading and displaying pet data
 */

import { petsBySpecies, getAllPets, getPetsBySpecies } from './Data/petData.js';

/**
 * Loads pets of a specific type and renders them to a container
 * @param {string} petType - Type of pets to load ('dogs', 'cats', or 'featured')
 * @param {string} containerId - ID of the container element to render pets into
 */
export function loadPets(petType, containerId) {
    console.log(`Loading pets of type: ${petType} into container: ${containerId}`);
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found`);
        return;
    }

    // Clear existing content
    container.innerHTML = '';
    
    // Get the appropriate pet data from petsBySpecies structure
    let pets;
    
    if (petType === 'dogs' && petsBySpecies.Dog) {
        console.log('Using petsBySpecies.Dog');
        pets = petsBySpecies.Dog;
    } else if (petType === 'cats' && petsBySpecies.Cat) {
        console.log('Using petsBySpecies.Cat');
        pets = petsBySpecies.Cat;
    } else if (petType === 'featured') {
        // For featured pets, create a mix from available species
        console.log('Creating featured pets mix from petsBySpecies');
        const dogPets = petsBySpecies.Dog || [];
        const catPets = petsBySpecies.Cat || [];
        pets = [...dogPets.slice(0, 3), ...catPets.slice(0, 3)];
    }
    
    if (!pets || !Array.isArray(pets)) {
        console.error(`No pet data found for type: ${petType}`);
        return;
    }
    
    console.log(`Found ${pets.length} pets to display`);

    // Render pets based on the container type
    if (containerId === 'dog-catalogue' || containerId === 'cat-catalogue') {
        // For dog/cat specific pages with grid layout
        renderPetGrid(pets, container, petType);
    } else {
        // For featured pets on homepage
        renderFeaturedPets(pets, container);
    }
}

/**
 * Renders pets in a grid layout (for dogs.html and cats.html)
 * @param {Array} pets - Array of pet objects
 * @param {HTMLElement} container - Container element
 * @param {string} petType - Type of pets ('dogs' or 'cats')
 */
function renderPetGrid(pets, container, petType) {
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = petType === 'dogs' ? 'dog-card' : 'cat-card';

        const img = document.createElement('img');
        img.src = pet.imageUrl || 'images/work-in-progress.svg';
        img.alt = `${pet.name} - ${pet.breed || ''}`;
        img.onerror = function() {
            this.src = 'images/work-in-progress.svg';
        };

        const infoDiv = document.createElement('div');
        infoDiv.className = petType === 'dogs' ? 'info' : 'cat-info';

        const name = document.createElement('h3');
        if (petType === 'cats') name.tagName = 'h2'; // Cats use h2 instead of h3
        name.textContent = pet.name;

        const age = document.createElement('p');
        if (petType === 'cats') {
            const span = document.createElement('span');
            span.textContent = 'Age: ';
            age.appendChild(span);
            age.appendChild(document.createTextNode(pet.age));
        } else {
            age.textContent = `Age: ${pet.age}`;
        }

        const description = document.createElement('p');
        description.textContent = pet.description;

        infoDiv.appendChild(name);
        infoDiv.appendChild(age);
        infoDiv.appendChild(description);

        petCard.appendChild(img);
        petCard.appendChild(infoDiv);

        container.appendChild(petCard);
    });}

/**
 * Renders featured pets (for index.html)
 * @param {Array} pets - Array of pet objects
 * @param {HTMLElement} container - Container element
 */
function renderFeaturedPets(pets, container) {
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';

        const imageDiv = document.createElement('div');
        imageDiv.className = 'pet-card-image';

        const img = document.createElement('img');
        img.src = pet.imageUrl || 'images/work-in-progress.svg';
        img.alt = pet.name;
        img.onerror = function() {
            this.src = 'images/work-in-progress.svg';
        };

        const contentDiv = document.createElement('div');
        contentDiv.className = 'pet-card-content';

        const name = document.createElement('h4');
        name.textContent = pet.name;

        const description = document.createElement('p');
        description.className = 'pet-description';
        description.textContent = pet.description;

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'pet-details';

        // Add pet attributes
        if (pet.size) {
            const sizeSpan = document.createElement('span');
            sizeSpan.className = 'pet-attribute';
            sizeSpan.textContent = `Size: ${pet.size}`;
            detailsDiv.appendChild(sizeSpan);
        }

        if (pet.energyLevel) {
            const energySpan = document.createElement('span');
            energySpan.className = 'pet-attribute';
            energySpan.textContent = `Energy: ${pet.energyLevel}`;
            detailsDiv.appendChild(energySpan);
        }

        if (pet.lifespan) {
            const lifespanSpan = document.createElement('span');
            lifespanSpan.className = 'pet-attribute';
            lifespanSpan.textContent = `Lifespan: ${pet.lifespan}`;
            detailsDiv.appendChild(lifespanSpan);
        }

        const learnMoreLink = document.createElement('a');
        learnMoreLink.href = pet.species === 'Dog' ? 'dogs.html' : 
                            pet.species === 'Cat' ? 'cats.html' : '#';
        learnMoreLink.className = 'pet-adopt-btn';
        learnMoreLink.textContent = 'Learn More';

        // Assemble the card
        imageDiv.appendChild(img);
        contentDiv.appendChild(name);
        contentDiv.appendChild(description);
        contentDiv.appendChild(detailsDiv);
        contentDiv.appendChild(learnMoreLink);

        petCard.appendChild(imageDiv);
        petCard.appendChild(contentDiv);

        container.appendChild(petCard);
    });
}

/**
 * Initialize pet data loading on page load
 */
export function initPetData() {
    // Determine which page we're on and load appropriate data
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Current page:', currentPage);
    console.log('Pet data available:', petData);
    
    if (currentPage === 'dogs.html' || currentPage.toLowerCase() === 'dogs.html') {
        console.log('Loading dogs data');
        loadPets('dogs', 'dog-catalogue');
    } else if (currentPage === 'cats.html' || currentPage.toLowerCase() === 'cats.html') {
        console.log('Loading cats data');
        loadPets('cats', 'cat-catalogue');
    } else if (currentPage === 'index.html' || currentPage === '' || currentPage === 'Index.html') {
        console.log('Loading featured pets data');
        loadPets('featured', 'featured-pets');
    }
}

// Auto-initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPetData);