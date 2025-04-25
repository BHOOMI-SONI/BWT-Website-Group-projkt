// Page-specific JavaScript for cats.html and dogs.html

document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle and nav links elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile menu toggle functionality
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Close all dropdowns when toggling the mobile menu
            if (!navLinks.classList.contains('active')) {
                closeAllDropdowns();
            }
        });
        
        // Close mobile menu when a nav link is clicked, but not for dropdown toggles
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Don't close the menu if this is a dropdown toggle
                if (!item.classList.contains('dropdown-toggle')) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
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
        
        if (dropdownToggle) {
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
        }
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
        
        // Add click handler for dropdown menu items to close mobile menu
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Close mobile menu when a final dropdown item is clicked
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    });
});