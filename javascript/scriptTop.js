function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/*$(document).ready(function(){
    $(this).scrollTop(0);
});*/

$(document).ready(function(){
    // Qui chiamo la funzione scrollToTop()
    scrollToTop();
});

// Attach the click event listener to the button
document.querySelector('.return-to-top').addEventListener('click', scrollToTop);
