window.addEventListener('DOMContentLoaded', (event) => {
  let form = document.querySelector('#contact-form');
  let nombreApellidoInput = document.getElementById('nom-ape');
  let emailInput = document.getElementById('email');
  let telefonoInput = document.getElementById('telefono');
  let mensajeInput = document.getElementById('mensaje');
  let contadorCaracteres = document.getElementById('contador-caracteres');
  let popup = document.getElementById('popup');
  let btnAceptar = document.getElementById('btnAceptar');

  mensajeInput.addEventListener('input', function() {
    let caracteresIngresados = mensajeInput.value.length;
    let caracteresRestantes = 1000 - caracteresIngresados;
    contadorCaracteres.textContent = `Caracteres ingresados: ${caracteresIngresados} | Caracteres restantes: ${caracteresRestantes}`;
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombreApellido = nombreApellidoInput.value.trim();
      if (nombreApellido.length < 10) {
          alert('Por favor, ingrese su nombre y apellido. Deben ser al menos 10 caracteres.');
          return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ar|edu|es)$/;
      if (!emailRegex.test(emailInput.value)) {
          alert('Por favor, ingrese un email válido.');
          return;
      }

      const telefono = telefonoInput.value.trim();
      if (telefono !== '') {
          const telefonoRegex = /^\d{4}-?\d{4,}$/;
          if (!telefonoRegex.test(telefono)) {
              alert('Por favor, ingrese un número de teléfono válido. Debe contener al menos 8 dígitos y puede incluir un guión medio opcional después del cuarto dígito.');
              return;
          }
      }

      const mensaje = mensajeInput.value.trim();
      if (mensaje === '' || mensaje.length > 1000) {
          alert('Por favor, ingrese un mensaje que no supere los 1000 caracteres.');
          return;
      }

      popup.style.display = 'block';
  });

  btnAceptar.addEventListener('click', function() {
      window.location.href = 'index.html';
  });
});

function mostrarAlerta() {
    alert("¡Botón Enviar presionado!");
  }