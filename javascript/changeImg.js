var images = [];
images[0] = ['https://patrick2734.github.io/images/profile.jpg']; // Prima immagine
images[1] = ['https://patrick2734.github.io/images/profile2.jpg']; // Seconda immagine
var index = 0;
function changeImage() {
    document.getElementById("mainPhoto").src = images[index][0];
    if (index == 1) {
        index = 0;
    } else {
        index++;
    }
    setTimeout(changeImage, 10000); // Cambia l'immagine ogni 5 secondi
}
window.onload = changeImage;
