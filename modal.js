/**
 * Modal functionality for pet cards
 * This file handles the creation and display of detailed pet information in a modal popup
 */

/**
 * Creates the modal HTML structure and appends it to the body
 */
function createModalStructure() {
    // Check if modal already exists
    if (document.getElementById('pet-modal')) return;
    
    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'pet-modal';
    modal.className = 'pet-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 id="modal-pet-name"></h2>
            </div>
            <div class="modal-body">
                <div class="modal-image-container">
                    <img id="modal-pet-image" src="" alt="Pet Image">
                </div>
                <div class="modal-details">
                    <p><strong>Breed:</strong> <span id="modal-pet-breed"></span></p>
                    <p><strong>Age:</strong> <span id="modal-pet-age"></span></p>
                    <p><strong>Size:</strong> <span id="modal-pet-size"></span></p>
                    <p><strong>Energy Level:</strong> <span id="modal-pet-energy"></span></p>
                    <p><strong>Description:</strong> <span id="modal-pet-description"></span></p>
                    <div id="modal-additional-info"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="adopt-button">Adopt Me!</button>
            </div>
        </div>
    `;
    
    // Append modal to body
    document.body.appendChild(modal);
    
    // Add event listener to close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

/**
 * Populates the modal with pet data
 * @param {Object} pet - The pet object containing all details
 */
function populateModal(pet) {
    // Set basic pet information
    document.getElementById('modal-pet-name').textContent = pet.name;
    document.getElementById('modal-pet-breed').textContent = pet.breed || 'Unknown';
    document.getElementById('modal-pet-age').textContent = pet.age || 'Unknown';
    document.getElementById('modal-pet-size').textContent = pet.size || 'Unknown';
    document.getElementById('modal-pet-energy').textContent = pet.energyLevel || 'Unknown';
    document.getElementById('modal-pet-description').textContent = pet.description || 'No description available';
    
    // Set pet image
    const petImage = document.getElementById('modal-pet-image');
    petImage.src = pet.imageUrl || 'images/work-in-progress.svg';
    petImage.alt = pet.name;
    petImage.onerror = function() {
        this.src = 'images/work-in-progress.svg';
    };
    
    // Add additional pet information if available
    const additionalInfoContainer = document.getElementById('modal-additional-info');
    additionalInfoContainer.innerHTML = '';
    
    // List of additional properties to display if available
    const additionalProperties = [
        { key: 'exerciseNeeds', label: 'Exercise Needs' },
        { key: 'groomingNeeds', label: 'Grooming Needs' },
        { key: 'sheddingLevel', label: 'Shedding Level' },
        { key: 'hypoallergenic', label: 'Hypoallergenic' },
        { key: 'trainability', label: 'Trainability' },
        { key: 'goodWithKids', label: 'Good with Kids' },
        { key: 'goodWithOtherDogs', label: 'Good with Other Dogs' },
        { key: 'goodWithCats', label: 'Good with Cats' },
        { key: 'apartmentFriendly', label: 'Apartment Friendly' },
        { key: 'vocalization', label: 'Vocalization' },
        { key: 'timeAloneTolerance', label: 'Time Alone Tolerance' },
        { key: 'lifespan', label: 'Lifespan' }
    ];
    
    // Create elements for additional properties
    additionalProperties.forEach(prop => {
        if (pet[prop.key] !== undefined) {
            const element = document.createElement('p');
            const value = typeof pet[prop.key] === 'boolean' 
                ? (pet[prop.key] ? 'Yes' : 'No')
                : pet[prop.key];
            
            element.innerHTML = `<strong>${prop.label}:</strong> <span>${value}</span>`;
            additionalInfoContainer.appendChild(element);
        }
    });
    
    // Display temperament if available
    if (pet.temperament && Array.isArray(pet.temperament) && pet.temperament.length > 0) {
        const temperamentElement = document.createElement('p');
        temperamentElement.innerHTML = `<strong>Temperament:</strong> <span>${pet.temperament.join(', ')}</span>`;
        additionalInfoContainer.appendChild(temperamentElement);
    }
}

/**
 * Opens the modal and displays pet information
 * @param {Object} pet - The pet object to display
 */
export function openPetModal(pet) {
    // Create modal structure if it doesn't exist
    createModalStructure();
    
    // Populate modal with pet data
    populateModal(pet);
    
    // Show modal
    const modal = document.getElementById('pet-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

/**
 * Closes the modal
 */
function closeModal() {
    const modal = document.getElementById('pet-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Initialize modal functionality
export function initModal() {
    // Create modal structure
    createModalStructure();
    
    // Add keyboard event listener to close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}