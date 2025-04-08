/*fetch("https://webhook.site/183eeec6-640b-4e5d-b9ff-bf1d5165adcc", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    page: window.location.href,
    userAgent: navigator.userAgent
  })
});*/
// Funzione per ottenere l'IP del visitatore
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    
    if (ip !== "157.138.166.194") {
      // Solo se l'IP NON è quello da escludere
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
  });
