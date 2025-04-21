/**
 * Pet Data Structure
 * 
 * This file contains the data structure for all pets displayed on the website.
 * To add new pets, follow the structure below and add entries to the appropriate species array.
 * 
 * DEVELOPER NOTE: 
 * - Each pet must have at least the basic properties (id, name, species, description)
 * - Image paths should be relative to the project root
 * - The script.js file automatically loads this data to populate the pet catalogue
 */

export const petsBySpecies = {
    // --- DOGS ---
    Dog: [
      {
        id: 'dog001',
        name: "Golden Retriever",
        species: "Dog",
        size: "Large", // Small, Medium, Large
        energyLevel: "High", // Low, Medium, High
        exerciseNeeds: "High", // Daily walks/play
        groomingNeeds: "Medium", // Regular brushing
        sheddingLevel: "High",
        hypoallergenic: false,
        trainability: "High", // Easy to train
        goodWithKids: true, // Great family dogs
        goodWithOtherDogs: true, // Generally sociable
        goodWithCats: 'with_supervision', // Depends on individual
        apartmentFriendly: false, // Needs space
        vocalization: "Medium", // Some barking
        timeAloneTolerance: "Medium", // Prefers company
        experienceRequired: "Beginner",
        estimatedCost: "Medium",
        // --- Informational Properties ---
        lifespan: "10-12 years",
        temperament: ["Friendly", "Intelligent", "Devoted", "Confident"],
        origin: "Scotland",
        description: "Friendly and intelligent companions known for their loyalty and gentle temperament.",
        imageUrl: "/images/pets/golden-retriever.jpg",
        profileUrl: "/pets/dogs/golden-retriever",
      },
      {
        id: 'dog002',
        name: "Labrador Retriever",
        species: "Dog",
        size: "Large",
        energyLevel: "High",
        description: "Friendly and outgoing companions that make excellent family pets.",
        imageUrl: "/images/pets/labrador.jpg",
        profileUrl: "/pets/dogs/labrador",
      },
      // Add more dog breeds here following the same structure
    ],
  
    // --- CATS ---
    Cat: [
      {
        id: 'cat001',
        name: "British Shorthair",
        species: "Cat",
        size: "Medium", // Small, Medium, Large (for cats)
        energyLevel: "Low", // Low, Medium, High
        exerciseNeeds: "Low", // Primarily indoor play
        groomingNeeds: "Low", // Weekly brushing
        sheddingLevel: "Medium",
        hypoallergenic: false,
        trainability: "Moderate", // Litter box easy, tricks harder
        goodWithKids: true, // Generally patient
        goodWithOtherDogs: 'with_supervision', // Depends on dog's temperament
        goodWithCats: true, // Usually good with other cats
        goodWithOtherCats: true, // Generally good with other cats
        apartmentFriendly: true,
        vocalization: "Low", // Quiet cats
        timeAloneTolerance: "Good", // Quite independent
        experienceRequired: "Beginner",
        estimatedCost: "Low",
        // --- Informational Properties ---
        lifespan: "12-20 years",
        temperament: ["Easygoing", "Calm", "Affectionate", "Independent"],
        origin: "United Kingdom",
        description: "With their plush coats and round faces, British Shorthairs are calm, affectionate companions.",
        imageUrl: "/images/pets/british-shorthair.jpg",
        profileUrl: "/pets/cats/british-shorthair",
      },
      {
        id: 'cat002',
        name: "Siamese Cat",
        species: "Cat",
        size: "Medium",
        energyLevel: "Medium",
        description: "Vocal and affectionate felines known for their striking blue eyes and color points.",
        imageUrl: "/images/pets/siamese-cat.jpg",
        profileUrl: "/pets/cats/siamese",
      },
      // Add more cat breeds here following the same structure
    ],
    
    // --- OTHER PET TYPES ---
    // You can add more pet types here following the same structure
    // Example: Birds, Small Pets, Reptiles, etc.
  };
  

  // a function to get all pets back into one list
  export function getAllPets() {
    let allPetsList = [];
    for (const speciesKey in petsBySpecies) {
      allPetsList = allPetsList.concat(petsBySpecies[speciesKey]);
    }
    return allPetsList;
  }
  
  // Get pets of only a specific species
  export function getPetsBySpecies(speciesName) {
      return petsBySpecies[speciesName] || [];
  }