$(document).ready(function(){
    $(this).scrollTop(0);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Attach the click event listener to the button
document.querySelector('.return-to-top').addEventListener('click', scrollToTop);
