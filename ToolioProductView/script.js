document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Update active tab based on scroll position
    function updateActiveTab() {
        const sections = document.querySelectorAll('.content-section');
        const scrollPosition = window.scrollY + 120; // Offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const correspondingTab = document.querySelector(
                    `.tab-button[href="#${section.id}"]`
                );
                
                tabButtons.forEach(tab => tab.classList.remove('active'));
                correspondingTab?.classList.add('active');
            }
        });
    }

    // Smooth scroll to section when clicking tab
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 119, // Offset for header
                behavior: 'smooth'
            });
        });
    });

    // Update active tab on scroll
    window.addEventListener('scroll', updateActiveTab);
    
    // Initial active state
    updateActiveTab();
}); 