// This file can be used for future enhancements if needed. 

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for Tech Stack page
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                tabContents.forEach(content => {
                    if (content.id === target) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const body = document.querySelector('body');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('mobile-nav-active');
        });
    }

    const contactTrigger = document.getElementById('mobile-contact-trigger');
    const contactOverlay = document.querySelector('.mobile-contact-overlay');
    const closeContactBtn = document.querySelector('.close-contact-btn');

    if (contactTrigger && contactOverlay && body && closeContactBtn) {
        contactTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            // First, close the main mobile nav
            body.classList.remove('mobile-nav-active');
            // Then, show the contact overlay
            contactOverlay.classList.add('active');
        });

        closeContactBtn.addEventListener('click', () => {
            contactOverlay.classList.remove('active');
        });

        // Optional: close by clicking background
        contactOverlay.addEventListener('click', (e) => {
            if (e.target === contactOverlay) {
                contactOverlay.classList.remove('active');
            }
        });
    }
}); 