// Funzione per ottenere la data e l'ora corrente
function getDataOraCorrente() {
    var dataOra = new Date(); // Ottiene la data e l'ora corrente
    var giorno = dataOra.getDate(); // Ottiene il giorno del mese (da 1 a 31)
    var mese = dataOra.getMonth() + 1; // Ottiene il mese (da 0 a 11, quindi +1 per avere il mese corretto)
    var anno = dataOra.getFullYear(); // Ottiene l'anno
    //var ore = dataOra.getHours(); // Ottiene le ore (da 0 a 23)
    //var minuti = dataOra.getMinutes(); // Ottiene i minuti (da 0 a 59)

    // Aggiusta i valori per i giorni, mesi e minuti inferiori a 10
    giorno = giorno < 10? "0" + giorno : giorno;
    mese = mese < 10? "0" + mese : mese;
    //minuti = minuti < 10? "0" + minuti : minuti;

    // Formatta la data e l'ora
    // var dataFormattata = giorno + "/" + mese + "/" + anno + " - " + ore + ":" + minuti;
    var dataFormattata = giorno + "/" + mese + "/" + anno;

    return dataFormattata;
}
// Funzione per mostrare la data e l'ora nell'HTML
function mostraDataOra() {
    var dataOraElemento = document.getElementById("dataOra");
    var dataOraCorrente = getDataOraCorrente();
    dataOraElemento.innerHTML = dataOraCorrente;
}
// Chiama la funzione per mostrare la data e l'ora quando la pagina viene caricata
mostraDataOra();

// Funzione per eseguire lo scroll automatico
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Chiama la funzione quando la pagina viene caricata
window.onload = scrollToTop();

document.addEventListener('DOMContentLoaded', function() {
    var followButton = document.getElementById('followButton');
    var socialIconsDropdown = document.getElementById('socialIconsDropdown');

    // Toggle dropdown visibility
    followButton.addEventListener('click', function() {
        socialIconsDropdown.style.display = socialIconsDropdown.style.display === 'block'? 'none' : 'block';
    });
});
