const toggleBtn = document.querySelector('.toggle-btn');
const contentWrapper = document.querySelector('.content-wrapper');

toggleBtn.addEventListener('click', () => {
    contentWrapper.classList.toggle('active');
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            contentWrapper.classList.remove('active');
        }
    });
}); 