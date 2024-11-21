document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-based opacity
window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar');
    const scrolled = window.scrollY;
    if (scrolled > 100) {
        sidebar.style.opacity = '0.8';
    } else {
        sidebar.style.opacity = '1';
    }
}); 