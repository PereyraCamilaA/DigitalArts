var personas = 0;
var precio = 0;
let total = 0;

let agregarPersona = document.getElementById("agregarPersona");
let botonInscribirse = document.querySelector(".enviar");

agregarPersona.addEventListener("click", function () {
  personas += 1;
  precio = 7800;

  let form = document.createElement("form");
  let nombreInput = document.createElement("input");
  let apellidoInput = document.createElement("input");
  let dniInput = document.createElement("input");
  let imagenBorrar = document.createElement("img");

  form.action = "#";
  nombreInput.type = "text";
  nombreInput.placeholder = "Ingresar nombre";
  apellidoInput.type = "text";
  apellidoInput.placeholder = "Ingresar apellido";
  dniInput.type = "text";
  dniInput.placeholder = "Ingresar DNI";
  imagenBorrar.src = "img/borrar.png";
  imagenBorrar.alt = "borrar";
  imagenBorrar.className = "borrar";

  form.appendChild(nombreInput);
  form.appendChild(apellidoInput);
  form.appendChild(dniInput);
  form.appendChild(imagenBorrar);

  agregarPersona.parentNode.insertBefore(form, agregarPersona.nextSibling);

  total += precio;
  actualizarTotal();
});


document.addEventListener("click", function (event) {
  if (event.target.classList.contains("borrar")) {
    let form = event.target.parentNode;
    let inputs = form.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    if (personas > 0) {
      form.parentNode.removeChild(form);
      personas--;
      total -= precio;
      actualizarTotal();
    }
  }
});

function actualizarTotal() {
  let precioPagar = document.querySelector(".boton-enviar p");
  precioPagar.innerHTML = "<strong> Precio a pagar: </strong> $" + total;
}


let modal = document.getElementById("myModal");
let modalContent = document.querySelector("#myModal .modal-content");

const inscriptos = [];
botonInscribirse.addEventListener("click", function () {
  event.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let dni = document.querySelector("#dni").value;
 
  const inscripto = {
    nombre,
    apellido,
    dni
  };

  inscriptos.push(inscripto);

   actualizarResumen();
 
   formulario.reset();

});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



function actualizarResumen() {
  let contenido = '';
  let totalAPagar = "Monto total: " + "$" + total;
  let cantidadDeInscriptos = "Cantidad de inscriptos: " + personas;
  for (let i = 0; i < inscriptos.length; i++) {
    if(inscriptos.nombre != nombre && inscriptos.apellido != apellido && inscriptos.dni != dni){
    const inscripto = inscriptos[i];
    const nombre = inscripto.nombre;
    const apellido = inscripto.apellido;
    const dni = inscripto.dni;

      contenido += `<p>${nombre} ${apellido} - DNI: ${dni}</p>`;
    }
  }
  
  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <h2>Resumen de inscripción</h2>
    <h3>¡Felicidades por inscribirte!</h3>
    <h3>Datos del/los Inscriptos</h3>
    ${contenido}
    <p> ${cantidadDeInscriptos}</p>
    <p> ${totalAPagar}</p>
    <img src="img/header-footer/logo.png" alt="logo" id="img-modal">
  `;
  
  modal.style.display = 'block';
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("close") || event.target.classList.contains("cerrar-modal")) {
    modal.style.display = "none";
  }
});