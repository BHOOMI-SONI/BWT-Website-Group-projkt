/**
 * Centralized Pet Data for Snug Buddies Pet Adoption Website
 * This file contains structured data for all pets available on the website
 * 
 * DEVELOPER NOTE: 
 * - Each pet must have at least the basic properties (id, name, species, description)
 * - Image paths should be relative to the project root
 * - The script.js file automatically loads this data to populate the pet catalogue
 */

// Main data structure organized by species
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
  

// Legacy data structure for backward compatibility with existing code
export const petData = {
  // Dogs data
  dogs: [
      {
          id: 'dog1',
          name: 'Bella',
          description: 'A sweet and playful Labrador who loves belly rubs and long walks.',
          image: 'https://placedog.net/500?id=1',
          age: '2 years',
          breed: 'Labrador',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs']
      },
      {
          id: 'dog2',
          name: 'Max',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=20',
          age: '3 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs', 'Cats']
      },
      {
          id: 'dog3',
          name: 'Luna',
          description: 'A spunky Beagle with a curious nose and lots of love to give.',
          image: 'https://placedog.net/500?id=3',
          age: '1.5 years',
          breed: 'Beagle',
          size: 'Medium',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs']
      },
      {
          id: 'dog4',
          name: 'Lily',
          description: 'A sweet and playful Labrador who loves belly rubs and long walks.',
          image: 'https://placedog.net/400/300?id=40',
          age: '1 year',
          breed: 'Labrador',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs']
      },
      {
          id: 'dog5',
          name: 'Aslan',
          description: 'A sweet and playful Labrador who loves belly rubs and long walks.',
          image: 'https://placedog.net/400/300?id=60',
          age: '4 years',
          breed: 'Labrador Mix',
          size: 'Large',
          energy: 'Medium',
          goodWith: ['Children', 'Other Dogs']
      },
      {
          id: 'dog6',
          name: 'Tyson',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=50',
          age: '2 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children']
      },
      {
          id: 'dog7',
          name: 'Joy',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=30',
          age: '1.5 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs', 'Cats']
      },
      {
          id: 'dog8',
          name: 'Milky',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=10',
          age: '4 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'Medium',
          goodWith: ['Children', 'Other Dogs']
      },
      {
          id: 'dog9',
          name: 'Cookie',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=30',
          age: '3 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'Medium',
          goodWith: ['Children', 'Seniors']
      },
      {
          id: 'dog10',
          name: 'Buddy',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=30',
          age: '2 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs']
      },
      {
          id: 'dog11',
          name: 'Rocky',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=30',
          age: '5 years',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'Medium',
          goodWith: ['Children', 'Seniors']
      },
      {
          id: 'dog12',
          name: 'Charlie',
          description: 'A gentle Golden Retriever who is great with kids and other pets.',
          image: 'https://placedog.net/400/300?id=30',
          age: '1 year',
          breed: 'Golden Retriever',
          size: 'Large',
          energy: 'High',
          goodWith: ['Children', 'Other Dogs', 'Cats']
      }
  ],
  
  // Cats data
  cats: [
      {
          id: 'cat1',
          name: 'Luna',
          description: 'Luna is a playful tabby who loves cuddles and feather toys.',
          image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg',
          age: '2 years',
          breed: 'Tabby',
          size: 'Medium',
          energy: 'Medium',
          goodWith: ['Children', 'Other Cats']
      },
      {
          id: 'cat2',
          name: 'Max',
          description: 'Max is a curious explorer and loves window-watching.',
          image: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '1 year',
          breed: 'Domestic Shorthair',
          size: 'Medium',
          energy: 'High',
          goodWith: ['Other Cats']
      },
      {
          id: 'cat3',
          name: 'Whiskers',
          description: 'A calm and gentle kitty who enjoys belly rubs.',
          image: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?cs=srgb&dl=pexels-wolpido-1472999.jpg&fm=jpg',
          age: '3 years',
          breed: 'Domestic Longhair',
          size: 'Medium',
          energy: 'Low',
          goodWith: ['Children', 'Other Cats']
      },
      {
          id: 'cat4',
          name: 'Milo',
          description: 'Milo is full of energy and loves to chase anything that moves.',
          image: 'https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '4 months',
          breed: 'Tabby',
          size: 'Small',
          energy: 'High',
          goodWith: ['Children', 'Other Cats']
      },
      {
          id: 'cat5',
          name: 'Bella',
          description: 'Bella is a calm senior cat who enjoys sunbathing.',
          image: 'https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '5 years',
          breed: 'Calico',
          size: 'Medium',
          energy: 'Low',
          goodWith: ['Seniors', 'Quiet Homes']
      },
      {
          id: 'cat6',
          name: 'Simba',
          description: 'Simba is adventurous and gets along great with kids.',
          image: 'https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '2.5 years',
          breed: 'Orange Tabby',
          size: 'Large',
          energy: 'Medium',
          goodWith: ['Children', 'Other Cats', 'Dogs']
      },
      {
          id: 'cat7',
          name: 'Cleo',
          description: 'Elegant and affectionate, Cleo is a lap cat through and through.',
          image: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '1.5 years',
          breed: 'Siamese Mix',
          size: 'Medium',
          energy: 'Medium',
          goodWith: ['Adults', 'Seniors']
      },
      {
          id: 'cat8',
          name: 'Oliver',
          description: 'Oliver is a talkative cat who loves attention and treats.',
          image: 'https://images.pexels.com/photos/368890/pexels-photo-368890.jpeg?cs=srgb&dl=pexels-tranmautritam-368890.jpg&fm=jpg',
          age: '3 years',
          breed: 'Tuxedo',
          size: 'Medium',
          energy: 'Medium',
          goodWith: ['Children', 'Other Cats']
      },
      {
          id: 'cat9',
          name: 'Nala',
          description: 'Nala is a sweet kitten who loves to nap in your lap.',
          image: 'https://images.pexels.com/photos/17773/pexels-photo.jpg?cs=srgb&dl=pexels-burakkostak-17773.jpg&fm=jpg',
          age: '6 months',
          breed: 'Domestic Shorthair',
          size: 'Small',
          energy: 'Medium',
          goodWith: ['Children', 'Other Cats']
      },
      {
          id: 'cat10',
          name: 'Tiger',
          description: 'Tiger is independent but loves a good scratch behind the ears.',
          image: 'https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '4 years',
          breed: 'Tabby',
          size: 'Large',
          energy: 'Low',
          goodWith: ['Adults']
      },
      {
          id: 'cat11',
          name: 'Mittens',
          description: 'Mittens is a playful cat who loves to chase toys and cuddle.',
          image: 'https://images.pexels.com/photos/731553/pexels-photo-731553.jpeg?auto=compress&cs=tinysrgb&w=600',
          age: '3 years',
          breed: 'Tuxedo',
          size: 'Medium',
          energy: 'Medium',
          goodWith: ['Children', 'Other Cats']
      },
      {
          id: 'cat12',
          name: 'Shadow',
          description: 'Shadow is a gentle cat who enjoys peaceful naps in sunny spots.',
          image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
          age: '2 years',
          breed: 'Black Domestic Shorthair',
          size: 'Medium',
          energy: 'Low',
          goodWith: ['Adults', 'Seniors']
      }
  ],
  
  // Featured pets for the homepage
  featured: [
      {
          id: 'featured1',
          name: 'British Shorthair',
          description: 'Calm, affectionate companions',
          image: '/images/pets/british-shorthair.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Medium',
          energy: 'Low',
          type: 'cat'
      },
      {
          id: 'featured2',
          name: 'Golden Retriever',
          description: 'Friendly and intelligent companions',
          image: '/images/pets/golden-retriever.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Large',
          energy: 'High',
          type: 'dog'
      },
      {
          id: 'featured3',
          name: 'Macaw Parrot',
          description: 'Colorful and intelligent birds',
          image: '/images/pets/parrot.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Medium',
          lifespan: '50+ years',
          type: 'bird'
      },
      {
          id: 'featured4',
          name: 'Labrador Retriever',
          description: 'Friendly and outgoing companions',
          image: '/images/pets/labrador.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Large',
          energy: 'High',
          type: 'dog'
      },
      {
          id: 'featured5',
          name: 'Siamese Cat',
          description: 'Vocal and affectionate felines',
          image: '/images/pets/siamese-cat.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Medium',
          energy: 'Medium',
          type: 'cat'
      },
      {
          id: 'featured6',
          name: 'Beagle',
          description: 'Curious and merry little hounds',
          image: '/images/pets/beagle.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Medium',
          energy: 'High',
          type: 'dog'
      },
      {
          id: 'featured7',
          name: 'Maine Coon',
          description: 'Gentle giants with playful personalities',
          image: '/images/pets/maine-coon.jpg',
          fallbackImage: 'images/work-in-progress.svg',
          size: 'Large',
          energy: 'Medium',
          type: 'cat'
      }
  ]
};

// Utility functions
// Get all pets back into one list
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

// Map legacy pet data to new structure for future compatibility
export function mapLegacyToNewFormat() {
  // This function can be used in the future to convert legacy data to the new format
  // For now, it's a placeholder for future development
  return {
    Dog: petData.dogs.map(dog => ({
      id: dog.id,
      name: dog.name,
      species: 'Dog',
      description: dog.description,
      size: dog.size,
      energyLevel: dog.energy,
      imageUrl: dog.image
    })),
    Cat: petData.cats.map(cat => ({
      id: cat.id,
      name: cat.name,
      species: 'Cat',
      description: cat.description,
      size: cat.size,
      energyLevel: cat.energy,
      imageUrl: cat.image
    }))
  };
}