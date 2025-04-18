export const petsBySpecies = {
    // --- DOGS ---
    Dog: [
      {
              // ... Add more dog breeds here ( each individual entry in {})
      }
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
       // ... Add more cat breeds here ( each individual entry in {})
      },
      
    ],
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