document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.masthead__menu-item a');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');

    mobileNavToggle.addEventListener('click', function() {
        const linksCollapse = document.querySelector('.masthead__menu');
        linksCollapse.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const currentActiveNav = document.querySelector('.masthead__menu-item.active a');
            const currentLink = this;

            if (currentActiveNav) {
                currentActiveNav.classList.remove('active');
            }

            if (window.innerWidth <= 768 &&!this.classList.contains('active')) {
                link.classList.add('active');
                e.preventDefault();
                window.location.href = '#';
            }
        });
    });
});
