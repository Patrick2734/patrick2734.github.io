fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    
   // if(ip !== "157.138.166.194" && ip !== "94.247.10.125") {
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
   // }
  })
  .catch(error => {
    console.error('Error fetching IP or sending data:', error);
  });
