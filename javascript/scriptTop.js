/*$(document).ready(function(){
    $(this).scrollTop(0);
});*/

const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});

