/**
 * Centralized Pet Data for Snug Buddies Pet Adoption Website
 * This file contains structured data for all pets available on the website
 * 
 * DEVELOPER NOTE: 
 * - Each pet must have at least the basic properties (id, name, species, description)
 * - Image paths should be relative to the project root for consistency where possible, 
 *   but legacy URLs are preserved for merged data.
 * - The script.js file automatically loads this data to populate the pet catalogue
 * - Legacy data from `petData` has been merged into `petsBySpecies`.
 * - Entries have been enhanced with more attributes for completeness.
 */

// Main data structure organized by species
export const petsBySpecies = {
  // --- DOGS ---
  Dog: [
    // --- Initially Defined Dogs (Enhanced) ---
    {
      id: 'dog001', // Represents a breed profile/example
      name: "Golden Retriever Breed Info", // Clarified name
      species: "Dog",
      breed: "Golden Retriever", // Added breed field
      age: "Varies", // Added age placeholder
      size: "Large", // Small, Medium, Large
      energyLevel: "High", // Low, Medium, High
      exerciseNeeds: "High", // Daily walks/play >60 mins
      groomingNeeds: "Medium", // Regular brushing 2-3 times/week
      sheddingLevel: "High",
      hypoallergenic: false,
      trainability: "High", // Eager to please
      goodWithKids: true, // Excellent family dogs
      goodWithOtherDogs: true, // Generally sociable
      goodWithCats: 'with_supervision', // Depends on individual socialization
      apartmentFriendly: false, // Needs a yard ideally
      vocalization: "Medium", // Barks when necessary/excited
      timeAloneTolerance: "Medium", // Prefers company, prone to separation anxiety if left too long
      experienceRequired: "Beginner", // Good for first-time owners willing to train
      estimatedCost: "Medium", // Food, grooming, potential health issues
      lifespan: "10-12 years",
      temperament: ["Friendly", "Intelligent", "Devoted", "Confident", "Trustworthy", "Kind"],
      origin: "Scotland",
      description: "Golden Retrievers are known for their friendly, intelligent, and devoted nature. They are great family companions but require regular exercise and grooming.",
      imageUrl: "/images/pets/golden-retriever.jpg",
      profileUrl: "/pets/dogs/golden-retriever-breed", // Updated URL
    },
    {
      id: 'dog002', // Represents a breed profile/example
      name: "Labrador Retriever Breed Info", // Clarified name
      species: "Dog",
      breed: "Labrador Retriever", // Added breed field
      age: "Varies", // Added age placeholder
      size: "Large",
      energyLevel: "High",
      exerciseNeeds: "High", // Needs >60 mins activity daily (running, fetch)
      groomingNeeds: "Low", // Weekly brushing usually sufficient
      sheddingLevel: "High", // Seasonal heavy shedding
      hypoallergenic: false,
      trainability: "High", // Intelligent and eager to please
      goodWithKids: true, // Typically excellent with children
      goodWithOtherDogs: true, // Usually very sociable
      goodWithCats: 'with_supervision', // Needs proper introduction/socialization
      apartmentFriendly: false, // Better with space and a yard
      vocalization: "Medium", // Moderate barking tendency
      timeAloneTolerance: "Medium", // Can suffer separation anxiety
      experienceRequired: "Beginner", // Suitable for active beginners
      estimatedCost: "Medium", // Food, toys, potential health costs
      lifespan: "10-12 years",
      temperament: ["Friendly", "Outgoing", "Active", "Gentle", "Intelligent"],
      origin: "Newfoundland (Canada)",
      description: "Labrador Retrievers are friendly, outgoing, and high-energy companions that make excellent family pets. They require significant exercise and mental stimulation.",
      imageUrl: "/images/pets/labrador.jpg",
      profileUrl: "/pets/dogs/labrador-breed", // Updated URL
    },
    // --- Merged Dogs from Legacy Data (Enhanced) ---
    {
        id: 'dog1',
        name: 'Bella', // Individual pet name
        species: "Dog",
        breed: 'Labrador',
        age: '2 years',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High', // Labs need lots of exercise
        groomingNeeds: 'Low', // Weekly brushing
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High', // Labs are generally trainable
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: 'unknown', // Not specified in legacy
        apartmentFriendly: false, // Large, high-energy
        vocalization: 'Medium', // Typical for Labs
        timeAloneTolerance: 'Medium', // Can get lonely
        experienceRequired: 'Beginner', // Suitable for active owners
        estimatedCost: 'Medium',
        lifespan: '10-12 years', // Typical for breed
        temperament: ["Sweet", "Playful", "Energetic", "Loves Belly Rubs"],
        origin: "Newfoundland (Canada)", // Breed origin
        description: 'Bella is a sweet and playful Labrador who loves belly rubs and long walks.',
        imageUrl: 'https://placedog.net/500?id=1', // Legacy URL
        profileUrl: '/pets/dogs/dog1-bella', // Generated URL
    },
    {
        id: 'dog2',
        name: 'Max', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '3 years',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High', // Goldens need exercise
        groomingNeeds: 'Medium', // Regular brushing needed
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High', // Goldens are smart
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: true, // Based on legacy 'Cats'
        apartmentFriendly: false, // Better with space
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium', // Prefers company
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Great with kids", "Sociable", "Friendly"],
        origin: "Scotland", // Breed origin
        description: 'Max is a gentle Golden Retriever who is great with kids and other pets.',
        imageUrl: 'https://placedog.net/400/300?id=20', // Legacy URL
        profileUrl: '/pets/dogs/dog2-max', // Generated URL
    },
    {
        id: 'dog3',
        name: 'Luna', // Individual pet name
        species: "Dog",
        breed: 'Beagle',
        age: '1.5 years',
        size: 'Medium',
        energyLevel: 'High',
        exerciseNeeds: 'High', // Beagles need walks and scent work
        groomingNeeds: 'Low', // Easy coat care
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Medium', // Can be stubborn, scent-driven
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs', often good in packs
        goodWithCats: 'with_supervision', // Prey drive potential
        apartmentFriendly: true, // Adaptable, but needs exercise & noise management
        vocalization: 'High', // Known for baying/howling
        timeAloneTolerance: 'Low', // Prone to separation anxiety/boredom
        experienceRequired: 'Intermediate', // Needs understanding of hound traits
        estimatedCost: 'Low',
        lifespan: '12-15 years',
        temperament: ["Spunky", "Curious", "Merry", "Loving", "Scent-driven"],
        origin: "United Kingdom", // Breed origin
        description: 'Luna is a spunky Beagle with a curious nose and lots of love to give.',
        imageUrl: 'https://placedog.net/500?id=3', // Legacy URL
        profileUrl: '/pets/dogs/dog3-luna', // Generated URL
    },
    {
        id: 'dog4',
        name: 'Lily', // Individual pet name
        species: "Dog",
        breed: 'Labrador',
        age: '1 year',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Low',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: 'unknown',
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Sweet", "Playful", "Energetic"],
        origin: "Newfoundland (Canada)",
        description: 'Lily is a sweet and playful Labrador who loves belly rubs and long walks.',
        imageUrl: 'https://placedog.net/400/300?id=40', // Legacy URL
        profileUrl: '/pets/dogs/dog4-lily', // Generated URL
    },
    {
        id: 'dog5',
        name: 'Aslan', // Individual pet name
        species: "Dog",
        breed: 'Labrador Mix',
        age: '4 years',
        size: 'Large',
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium', // Mix might moderate needs
        groomingNeeds: 'Medium', // Depends on mix, assume moderate
        sheddingLevel: 'Medium', // Depends on mix
        hypoallergenic: false,
        trainability: 'High', // Lab influence
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: 'unknown',
        apartmentFriendly: false, // Likely needs space
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-13 years', // Mix estimate
        temperament: ["Sweet", "Playful", "Moderate Energy"],
        origin: "Mixed Breed",
        description: 'Aslan is a sweet and playful Labrador mix who loves belly rubs and walks.',
        imageUrl: 'https://placedog.net/400/300?id=60', // Legacy URL
        profileUrl: '/pets/dogs/dog5-aslan', // Generated URL
    },
    {
        id: 'dog6',
        name: 'Tyson', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '2 years',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown', // Not specified, assume needs assessment
        goodWithCats: 'unknown',
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Great with kids", "Energetic"],
        origin: "Scotland",
        description: 'Tyson is a gentle Golden Retriever who is great with kids.',
        imageUrl: 'https://placedog.net/400/300?id=50', // Legacy URL
        profileUrl: '/pets/dogs/dog6-tyson', // Generated URL
    },
    {
        id: 'dog7',
        name: 'Joy', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '1.5 years',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: true, // Based on legacy 'Cats'
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Sociable", "Friendly", "Happy"],
        origin: "Scotland",
        description: 'Joy is a gentle Golden Retriever who is great with kids and other pets.',
        imageUrl: 'https://placedog.net/400/300?id=30', // Legacy URL
        profileUrl: '/pets/dogs/dog7-joy', // Generated URL
    },
    {
        id: 'dog8',
        name: 'Milky', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '4 years',
        size: 'Large',
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium', // Slightly lower energy due to age/temperament
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: 'unknown',
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Friendly", "Calmer"],
        origin: "Scotland",
        description: 'Milky is a gentle Golden Retriever who is great with kids and other dogs.',
        imageUrl: 'https://placedog.net/400/300?id=10', // Legacy URL
        profileUrl: '/pets/dogs/dog8-milky', // Generated URL
    },
    {
        id: 'dog9',
        name: 'Cookie', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '3 years',
        size: 'Large',
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium',
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown',
        goodWithCats: 'unknown',
        goodWithSeniors: true, // Based on legacy 'Seniors'
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Friendly", "Good with Seniors"],
        origin: "Scotland",
        description: 'Cookie is a gentle Golden Retriever who is great with kids and seniors.',
        imageUrl: 'https://placedog.net/400/300?id=30', // Legacy URL - NOTE: Same as dog7, might need update
        profileUrl: '/pets/dogs/dog9-cookie', // Generated URL
    },
    {
        id: 'dog10',
        name: 'Buddy', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '2 years',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: 'unknown',
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Friendly", "Energetic", "Sociable"],
        origin: "Scotland",
        description: 'Buddy is a gentle Golden Retriever who is great with kids and other dogs.',
        imageUrl: 'https://placedog.net/400/300?id=30', // Legacy URL - NOTE: Same as dog7/dog9
        profileUrl: '/pets/dogs/dog10-buddy', // Generated URL
    },
    {
        id: 'dog11',
        name: 'Rocky', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '5 years',
        size: 'Large',
        energyLevel: 'Medium', // Slightly less energy than a pup
        exerciseNeeds: 'Medium',
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown',
        goodWithCats: 'unknown',
        goodWithSeniors: true, // Based on legacy 'Seniors'
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Friendly", "Mature", "Good with Seniors"],
        origin: "Scotland",
        description: 'Rocky is a gentle Golden Retriever who is great with kids and seniors.',
        imageUrl: 'https://placedog.net/400/300?id=30', // Legacy URL - NOTE: Same as dog7/dog9/dog10
        profileUrl: '/pets/dogs/dog11-rocky', // Generated URL
    },
    {
        id: 'dog12',
        name: 'Charlie', // Individual pet name
        species: "Dog",
        breed: 'Golden Retriever',
        age: '1 year',
        size: 'Large',
        energyLevel: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Medium',
        sheddingLevel: 'High',
        hypoallergenic: false,
        trainability: 'High',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Other Dogs'
        goodWithCats: true, // Based on legacy 'Cats'
        apartmentFriendly: false,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Medium',
        lifespan: '10-12 years',
        temperament: ["Gentle", "Friendly", "Sociable", "Playful"],
        origin: "Scotland",
        description: 'Charlie is a gentle Golden Retriever who is great with kids and other pets.',
        imageUrl: 'https://placedog.net/400/300?id=30', // Legacy URL - NOTE: Same as others
        profileUrl: '/pets/dogs/dog12-charlie', // Generated URL
    }
    // Add more dog breeds/individuals here following the same structure
  ],

  // --- CATS ---
  Cat: [
    // --- Initially Defined Cats (Enhanced) ---
    {
      id: 'cat001', // Represents a breed profile/example
      name: "British Shorthair Breed Info", // Clarified name
      species: "Cat",
      breed: "British Shorthair", // Added breed field
      age: "Varies", // Added age placeholder
      size: "Medium", // Can be Large for males
      energyLevel: "Low", // Low to Medium
      exerciseNeeds: "Low", // Indoor play is sufficient
      groomingNeeds: "Low", // Weekly brushing, more in shedding season
      sheddingLevel: "Medium", // Dense coat sheds seasonally
      hypoallergenic: false,
      trainability: "Moderate", // Litter box easy, tricks possible but needs patience
      goodWithKids: true, // Generally patient and tolerant
      goodWithOtherDogs: 'with_supervision', // Calm intros needed
      goodWithCats: true, // Usually good with other cats
      // goodWithOtherCats: true, // Removed duplicate field
      apartmentFriendly: true, // Excellent apartment cats
      vocalization: "Low", // Typically quiet
      timeAloneTolerance: "Good", // Reasonably independent
      experienceRequired: "Beginner", // Easygoing nature
      estimatedCost: "Low", // Standard cat costs
      lifespan: "12-20 years",
      temperament: ["Easygoing", "Calm", "Affectionate", "Independent", "Quiet", "Dignified"],
      origin: "United Kingdom",
      description: "With their plush coats and round faces, British Shorthairs are calm, affectionate, and relatively independent companions, well-suited for apartment living.",
      imageUrl: "/images/pets/british-shorthair.jpg",
      profileUrl: "/pets/cats/british-shorthair-breed", // Updated URL
    },
    {
      id: 'cat002', // Represents a breed profile/example
      name: "Siamese Cat Breed Info", // Clarified name
      species: "Cat",
      breed: "Siamese", // Added breed field
      age: "Varies", // Added age placeholder
      size: "Medium",
      energyLevel: "High", // Changed to High - Siamese are active
      exerciseNeeds: "Medium", // Need interactive play and climbing spaces
      groomingNeeds: "Low", // Short coat is easy care
      sheddingLevel: "Low",
      hypoallergenic: false, // Though sometimes better tolerated
      trainability: "High", // Intelligent and can learn tricks/commands
      goodWithKids: true, // Often playful with respectful children
      goodWithOtherDogs: 'with_supervision', // Can bond with cat-friendly dogs
      goodWithCats: true, // Often enjoy feline company
      apartmentFriendly: true, // Adaptable if needs are met
      vocalization: "High", // Famous for being very vocal
      timeAloneTolerance: "Low", // Crave companionship, prone to loneliness
      experienceRequired: "Intermediate", // Needs engagement and tolerance for noise
      estimatedCost: "Low", // Standard cat costs
      lifespan: "15-20 years",
      temperament: ["Affectionate", "Vocal", "Intelligent", "Social", "Demanding", "Playful"],
      origin: "Thailand (formerly Siam)",
      description: "Siamese cats are vocal, intelligent, and affectionate felines known for their striking blue almond eyes and color points. They thrive on interaction and attention.",
      imageUrl: "/images/pets/siamese-cat.jpg",
      profileUrl: "/pets/cats/siamese-breed", // Updated URL
    },
    // --- Merged Cats from Legacy Data (Enhanced) ---
    {
        id: 'cat1',
        name: 'Luna', // Individual pet name
        species: "Cat",
        breed: 'Tabby', // Note: Tabby is a coat pattern, not a breed
        age: '2 years',
        size: 'Medium',
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium', // Needs playtime
        groomingNeeds: 'Low', // Assuming Shorthair Tabby
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate', // Litter trained, basic commands possible
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown',
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Medium', // Average cat vocalization
        timeAloneTolerance: 'Medium', // Typical cat independence
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years', // General estimate for domestic cat
        temperament: ["Playful", "Cuddly", "Loves feather toys"],
        origin: "Domestic Mix",
        description: 'Luna is a playful tabby who loves cuddles and feather toys.',
        imageUrl: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg', // Legacy URL
        profileUrl: '/pets/cats/cat1-luna', // Generated URL
    },
    {
        id: 'cat2',
        name: 'Max', // Individual pet name
        species: "Cat",
        breed: 'Domestic Shorthair',
        age: '1 year',
        size: 'Medium',
        energyLevel: 'High',
        exerciseNeeds: 'Medium', // Needs play and stimulation
        groomingNeeds: 'Low',
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: 'unknown',
        goodWithOtherDogs: 'unknown',
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Curious", "Explorer", "Energetic", "Window-watcher"],
        origin: "Domestic Mix",
        description: 'Max is a curious explorer and loves window-watching.',
        imageUrl: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat2-max', // Generated URL
    },
    {
        id: 'cat3',
        name: 'Whiskers', // Individual pet name
        species: "Cat",
        breed: 'Domestic Longhair',
        age: '3 years',
        size: 'Medium',
        energyLevel: 'Low',
        exerciseNeeds: 'Low', // Gentle play preferred
        groomingNeeds: 'Medium', // Needs regular brushing
        sheddingLevel: 'High', // Long fur sheds
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown',
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Low', // Likely quieter if calm
        timeAloneTolerance: 'Good', // Calm cats often tolerate alone time well
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Calm", "Gentle", "Enjoys belly rubs"],
        origin: "Domestic Mix",
        description: 'Whiskers is a calm and gentle kitty who enjoys belly rubs.',
        imageUrl: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?cs=srgb&dl=pexels-wolpido-1472999.jpg&fm=jpg', // Legacy URL
        profileUrl: '/pets/cats/cat3-whiskers', // Generated URL
    },
    {
        id: 'cat4',
        name: 'Milo', // Individual pet name
        species: "Cat",
        breed: 'Tabby', // Pattern, assume DSH
        age: '4 months', // Kitten
        size: 'Small', // Kitten size
        energyLevel: 'High', // Kittens are energetic
        exerciseNeeds: 'High', // Lots of playtime needed
        groomingNeeds: 'Low',
        sheddingLevel: 'Low', // Less shedding when young
        hypoallergenic: false,
        trainability: 'High', // Kittens learn quickly
        goodWithKids: true, // Based on legacy 'Children' (with supervision)
        goodWithOtherDogs: 'with_supervision', // Needs careful intro
        goodWithCats: true, // Based on legacy 'Other Cats' (good age for socializing)
        apartmentFriendly: true,
        vocalization: 'Medium', // Kittens can be vocal
        timeAloneTolerance: 'Low', // Kittens need more supervision/company
        experienceRequired: 'Beginner', // But be prepared for kitten energy
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Energetic", "Playful", "Loves chasing"],
        origin: "Domestic Mix",
        description: 'Milo is full of energy and loves to chase anything that moves.',
        imageUrl: 'https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat4-milo', // Generated URL
    },
    {
        id: 'cat5',
        name: 'Bella', // Individual pet name
        species: "Cat",
        breed: 'Calico', // Color pattern, assume DSH/DMH
        age: '5 years',
        size: 'Medium',
        energyLevel: 'Low',
        exerciseNeeds: 'Low',
        groomingNeeds: 'Low', // Assume Shorthair
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: 'unknown',
        goodWithOtherDogs: 'unknown',
        goodWithCats: 'unknown', // Needs assessment
        goodWithSeniors: true, // Based on legacy 'Seniors'
        suitedToQuietHome: true, // Based on legacy 'Quiet Homes'
        apartmentFriendly: true,
        vocalization: 'Low',
        timeAloneTolerance: 'Good',
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Calm", "Senior-friendly", "Enjoys sunbathing", "Prefers quiet"],
        origin: "Domestic Mix",
        description: 'Bella is a calm senior cat who enjoys sunbathing and quiet homes.',
        imageUrl: 'https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat5-bella', // Generated URL
    },
    {
        id: 'cat6',
        name: 'Simba', // Individual pet name
        species: "Cat",
        breed: 'Orange Tabby', // Pattern, assume DSH/DMH
        age: '2.5 years',
        size: 'Large', // Larger cat
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium',
        groomingNeeds: 'Low', // Assuming Shorthair
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: true, // Based on legacy 'Dogs'
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Adventurous", "Sociable", "Friendly", "Good with kids"],
        origin: "Domestic Mix",
        description: 'Simba is adventurous and gets along great with kids, cats, and dogs.',
        imageUrl: 'https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat6-simba', // Generated URL
    },
    {
        id: 'cat7',
        name: 'Cleo', // Individual pet name
        species: "Cat",
        breed: 'Siamese Mix',
        age: '1.5 years',
        size: 'Medium',
        energyLevel: 'Medium', // Mix might moderate Siamese energy
        exerciseNeeds: 'Medium',
        groomingNeeds: 'Low', // Likely short coat
        sheddingLevel: 'Low', // Siamese trait
        hypoallergenic: false,
        trainability: 'High', // Siamese intelligence influence
        goodWithKids: 'unknown', // Not specified, assess based on individual
        goodWithOtherDogs: 'with_supervision',
        goodWithCats: true, // Often good if mixed
        goodWithAdults: true, // Based on legacy 'Adults'
        goodWithSeniors: true, // Based on legacy 'Seniors'
        apartmentFriendly: true,
        vocalization: 'Medium', // Likely less vocal than purebred Siamese
        timeAloneTolerance: 'Medium', // Mix might be more independent
        experienceRequired: 'Beginner', // Mix likely easier than purebred
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Elegant", "Affectionate", "Lap cat", "Good with adults/seniors"],
        origin: "Mixed Breed (Siamese influence)",
        description: 'Elegant and affectionate, Cleo is a lap cat through and through. Good with adults and seniors.',
        imageUrl: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat7-cleo', // Generated URL
    },
    {
        id: 'cat8',
        name: 'Oliver', // Individual pet name
        species: "Cat",
        breed: 'Tuxedo', // Pattern, assume DSH
        age: '3 years',
        size: 'Medium',
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium',
        groomingNeeds: 'Low',
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown',
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Medium', // Described as 'talkative'
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Talkative", "Loves attention", "Treat motivated", "Friendly"],
        origin: "Domestic Mix",
        description: 'Oliver is a talkative cat who loves attention and treats.',
        imageUrl: 'https://images.pexels.com/photos/368890/pexels-photo-368890.jpeg?cs=srgb&dl=pexels-tranmautritam-368890.jpg&fm=jpg', // Legacy URL
        profileUrl: '/pets/cats/cat8-oliver', // Generated URL
    },
    {
        id: 'cat9',
        name: 'Nala', // Individual pet name
        species: "Cat",
        breed: 'Domestic Shorthair',
        age: '6 months', // Kitten
        size: 'Small', // Kitten size
        energyLevel: 'High', // Kittens are energetic
        exerciseNeeds: 'High', // Needs lots of play
        groomingNeeds: 'Low',
        sheddingLevel: 'Low',
        hypoallergenic: false,
        trainability: 'High', // Kittens learn quickly
        goodWithKids: true, // Based on legacy 'Children' (with supervision)
        goodWithOtherDogs: 'with_supervision',
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Medium',
        timeAloneTolerance: 'Low', // Needs company/supervision
        experienceRequired: 'Beginner', // Be ready for kitten stage
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Sweet", "Lap kitten", "Playful", "Nap enthusiast"],
        origin: "Domestic Mix",
        description: 'Nala is a sweet kitten who loves to nap in your lap.',
        imageUrl: 'https://images.pexels.com/photos/17773/pexels-photo.jpg?cs=srgb&dl=pexels-burakkostak-17773.jpg&fm=jpg', // Legacy URL
        profileUrl: '/pets/cats/cat9-nala', // Generated URL
    },
    {
        id: 'cat10',
        name: 'Tiger', // Individual pet name
        species: "Cat",
        breed: 'Tabby', // Pattern, assume DSH/DMH
        age: '4 years',
        size: 'Large', // Large cat
        energyLevel: 'Low',
        exerciseNeeds: 'Low',
        groomingNeeds: 'Low', // Assume Shorthair
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: false, // Implied by 'Adults only'
        goodWithOtherDogs: 'unknown',
        goodWithCats: 'unknown', // Needs assessment
        goodWithAdults: true, // Based on legacy 'Adults'
        apartmentFriendly: true,
        vocalization: 'Low', // Likely quiet if low energy/independent
        timeAloneTolerance: 'Good', // Independence suggests good tolerance
        experienceRequired: 'Beginner', // Low energy suits many
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Independent", "Enjoys scratches", "Calm", "Prefers adults"],
        origin: "Domestic Mix",
        description: 'Tiger is independent but loves a good scratch behind the ears. Best suited for an adult-only home.',
        imageUrl: 'https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat10-tiger', // Generated URL
    },
    {
        id: 'cat11',
        name: 'Mittens', // Individual pet name
        species: "Cat",
        breed: 'Tuxedo', // Pattern, assume DSH
        age: '3 years',
        size: 'Medium',
        energyLevel: 'Medium',
        exerciseNeeds: 'Medium',
        groomingNeeds: 'Low',
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: true, // Based on legacy 'Children'
        goodWithOtherDogs: 'unknown',
        goodWithCats: true, // Based on legacy 'Other Cats'
        apartmentFriendly: true,
        vocalization: 'Medium',
        timeAloneTolerance: 'Medium',
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Playful", "Cuddly", "Loves toys"],
        origin: "Domestic Mix",
        description: 'Mittens is a playful cat who loves to chase toys and cuddle.',
        imageUrl: 'https://images.pexels.com/photos/731553/pexels-photo-731553.jpeg?auto=compress&cs=tinysrgb&w=600', // Legacy URL
        profileUrl: '/pets/cats/cat11-mittens', // Generated URL
    },
    {
        id: 'cat12',
        name: 'Shadow', // Individual pet name
        species: "Cat",
        breed: 'Black Domestic Shorthair',
        age: '2 years',
        size: 'Medium',
        energyLevel: 'Low',
        exerciseNeeds: 'Low',
        groomingNeeds: 'Low',
        sheddingLevel: 'Medium',
        hypoallergenic: false,
        trainability: 'Moderate',
        goodWithKids: false, // Implied by 'Adults', 'Seniors'
        goodWithOtherDogs: 'unknown',
        goodWithCats: 'unknown', // Needs assessment
        goodWithAdults: true, // Based on legacy 'Adults'
        goodWithSeniors: true, // Based on legacy 'Seniors'
        apartmentFriendly: true,
        vocalization: 'Low', // Likely quiet
        timeAloneTolerance: 'Good', // Calm cats often tolerate alone time
        experienceRequired: 'Beginner',
        estimatedCost: 'Low',
        lifespan: '12-18 years',
        temperament: ["Gentle", "Enjoys naps", "Likes sunny spots", "Calm"],
        origin: "Domestic Mix",
        description: 'Shadow is a gentle cat who enjoys peaceful naps in sunny spots. Good with adults and seniors.',
        imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg', // Legacy URL
        profileUrl: '/pets/cats/cat12-shadow', // Generated URL
    }
    // Add more cat breeds/individuals here following the same structure
  ],
  
  // --- OTHER PET TYPES ---
  // You can add more pet types here following the same structure
  // Example: Birds, Small Pets, Reptiles, etc.
  Bird: [
      // Example Bird Entry (from featured, enhanced)
      {
          id: 'bird001',
          name: 'Macaw Parrot Breed Info',
          species: 'Bird',
          breed: 'Macaw Parrot',
          age: 'Varies',
          size: 'Large', // Macaws are large parrots
          energyLevel: 'High',
          exerciseNeeds: 'High', // Needs lots of out-of-cage time, foraging toys
          groomingNeeds: 'Low', // Self-grooming, occasional misting/bathing helpful
          sheddingLevel: 'Low', // Dander/dust rather than shedding
          hypoallergenic: false, // Feather dust can be allergenic
          trainability: 'High', // Very intelligent, can learn speech/tricks
          goodWithKids: 'with_supervision', // Can bite, loud; better with older, respectful kids
          goodWithOtherDogs: 'with_supervision', // Risk of injury to bird
          goodWithCats: 'with_supervision', // Risk of injury to bird
          goodWithOtherBirds: 'with_supervision', // Depends on individual birds/species
          apartmentFriendly: false, // Very loud, destructive potential, need space
          vocalization: 'Very High', // Extremely loud calls
          timeAloneTolerance: 'Low', // Prone to boredom, stress, feather plucking if left alone
          experienceRequired: 'Expert', // Complex needs, long lifespan
          estimatedCost: 'High', // Cage, toys, vet care, food can be expensive
          lifespan: '50+ years', // Very long-lived
          temperament: ["Intelligent", "Social", "Loud", "Playful", "Demanding", "Affectionate (with bond)"],
          origin: "Central/South America",
          description: "Macaws are large, colorful, and highly intelligent parrots requiring experienced owners due to their complex social needs, noise level, and long lifespan.",
          imageUrl: '/images/pets/parrot.jpg',
          profileUrl: "/pets/birds/macaw-breed",
      }
  ]
};

export function getAllPets() {
let allPetsList = [];
for (const speciesKey in petsBySpecies) {
  allPetsList = allPetsList.concat(petsBySpecies[speciesKey]);
}
return allPetsList;
}

// Get pets of only a specific species from the primary source
export function getPetsBySpecies(speciesName) {
  return petsBySpecies[speciesName] || [];
}
