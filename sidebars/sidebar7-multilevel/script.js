document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const menuItems = document.querySelectorAll('.has-submenu');

    // Toggle sidebar collapse
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        // Reset all submenus when collapsing
        if (sidebar.classList.contains('collapsed')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Handle submenu toggles
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Don't toggle if sidebar is collapsed
            if (sidebar.classList.contains('collapsed')) {
                return;
            }

            const isNested = item.classList.contains('nested');
            
            // Close other menus at the same level
            const siblings = isNested 
                ? item.parentElement.querySelectorAll('.has-submenu.nested')
                : document.querySelectorAll('.has-submenu:not(.nested)');
            
            siblings.forEach(sibling => {
                if (sibling !== item) {
                    sibling.classList.remove('active');
                }
            });

            // Toggle current menu
            item.classList.toggle('active');
        });
    });

    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.closest('.has-submenu')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target)) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}); 