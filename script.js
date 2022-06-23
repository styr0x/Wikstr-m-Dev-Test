const scrollBtn = document.getElementById("scrollBtn");
const contactCard = document.getElementById("contactCard");

scrollBtn.addEventListener('click', scroll);


function scroll() {
    contactCard.scrollIntoView({behavior: "smooth", block: "start"});
}