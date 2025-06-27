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