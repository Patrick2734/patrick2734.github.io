/*fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    
   if(ip !== "157.138.166.194" && ip !== "94.247.10.125") {
      fetch("https://webhook.site/183eeec6-640b-4e5d-b9ff-bf1d5165adcc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ip: ip,
          page: window.location.href,
          userAgent: navigator.userAgent
        })
      });
   }
  })
  .catch(error => {
    console.error('Error fetching IP or sending data:', error);
  });*/

/*fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch("https://webhook.site/183eeec6-640b-4e5d-b9ff-bf1d5165adcc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ip: ip,
        page: window.location.href,
        userAgent: navigator.userAgent
      })
    });
  })
  .catch(error => {
    console.error('Error fetching IP or sending data:', error);
  });*/

// Funzione per ottenere l'IP pubblico
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;

    // Recupera i dati salvati in localStorage
    const storedData = JSON.parse(localStorage.getItem(ip)) || {};
    const lastDetectedTime = storedData.timestamp;
    const currentTime = new Date().getTime();

    // Controlla se sono passati meno di 10 minuti dall'ultima detection
    if (lastDetectedTime && (currentTime - lastDetectedTime < 10 * 60 * 1000)) {
      console.log("IP già rilevato negli ultimi 10 minuti. Nessuna nuova detection.");
      return; // Esci dalla funzione senza inviare nuovamente i dati
    }

    // Salva il timestamp corrente in localStorage per questo IP
    localStorage.setItem(ip, JSON.stringify({ timestamp: currentTime }));

    // Invia i dati al webhook
    fetch("https://webhook.site/183eeec6-640b-4e5d-b9ff-bf1d5165adcc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ip: ip,
        page: window.location.href,
        userAgent: navigator.userAgent
      })
    });
  })
  .catch(error => {
    console.error('Errore nel recupero dell\'IP o nell\'invio dei dati:', error);
  });
