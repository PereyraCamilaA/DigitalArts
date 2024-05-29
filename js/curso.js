let acordeonBtns = document.querySelectorAll('.acordeon-btn');

acordeonBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let content = this.nextElementSibling;
    content.classList.toggle('open');
  });
});

let botonesIds = ["comprar6", "comprar7", "comprar8", "comprar9"];

let modal = document.getElementById("modal");
let closeButton = document.getElementsByClassName("close")[0];

botonesIds.forEach(function(id) {

  let botonInscribirse = document.getElementById(id);
  
  botonInscribirse.addEventListener("click", function() {
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

let acordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    let acordeonContent = this.getElementsByClassName("acordeon-content")[0];
    
    if (acordeonContent.style.display === "block") {
      acordeonContent.style.display = "none";
    } else {
      acordeonContent.style.display = "block";
    }
  });
  
  let radioInputs = acordeon[i].getElementsByTagName("input");
  
  for (let j = 0; j < radioInputs.length; j++) {
    radioInputs[j].addEventListener("click", function(event) {
      event.stopPropagation();
    });
  }
}