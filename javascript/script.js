document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.masthead__menu-item a');
    var mobileNavToggle = document.getElementById('mobile-nav-toggle');

    mobileNavToggle.addEventListener('click', function() {
        var linksCollapse = document.querySelector('.masthead__menu');
        linksCollapse.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var currentActiveNav = document.querySelector('.masthead__menu-item.active a');
            var currentLink = this;

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

