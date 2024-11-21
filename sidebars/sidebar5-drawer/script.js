document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const menuItems = document.querySelectorAll('[data-panel]');
    const backBtns = document.querySelectorAll('.back-btn');
    const panels = document.querySelectorAll('.panel');

    // Toggle sidebar
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Handle panel navigation
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPanelId = `${item.dataset.panel}-panel`;
            const targetPanel = document.getElementById(targetPanelId);
            
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Handle back button
    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentPanel = btn.closest('.sub-panel');
            currentPanel.classList.remove('active');
        });
    });

    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.dataset.panel) {  // Only for regular links
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('active');
                    }
                }
            }
        });
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}); 