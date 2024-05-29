let h2 = document.querySelector('#tarjeta h2');
let fondo = document.getElementsByName("color");
let tarjeta = document.getElementById('tarjeta');
let radiosFuente = document.querySelectorAll('input[name="tamaño"]');
let opcionFondo = document.getElementById('opcionFondo');
let texto = document.querySelector("#texto");
let valor = document.getElementById("valor");
let h3 = document.querySelector('#tarjeta h3');
let radiosColor = document.querySelectorAll('input[type=radio][name="color"]');

//CAMBIA EL TEXTO DE LA TARJETA

texto.addEventListener("input", function () {
    h2.innerHTML = texto.value;
});

//CAMBIA EL COLOR DE TEXTO EN LA TARJETA

radiosColor.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let colorValue = this.value;

        h2.classList.remove("color1", "color2", "color3", "color4");
        h3.classList.remove("color1", "color2", "color3", "color4");

        h2.classList.add(colorValue);
        h3.classList.add(colorValue);

    });
});

//CAMBIA LA IMAGEN DEL FONDO

opcionFondo.addEventListener('change', function () {

    let fondoElegido = opcionFondo.querySelector('input[name="fondo"]:checked').value;

    let rutaImagen = window.location.href + 'TP FINAL/img/imagen-gift/' + fondoElegido;

    tarjeta.style.backgroundImage = 'url("img/imagen-gift/' + fondoElegido + '")';
});

//CAMBIA EL TAMAÑO DE LA FUENTE

radiosFuente.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let tamañoElegido = this.value;

        switch (tamañoElegido) {
            case 'tamaño1':
                tarjeta.style.fontSize = "15px";
                break;
            case 'tamaño2':
                tarjeta.style.fontSize = "20px";
                break;
            case 'tamaño3':
                tarjeta.style.fontSize = "25px";
                break;
            case 'tamaño4':
                tarjeta.style.fontSize = "30px";
                break;
            default:
                tarjeta.style.fontSize = "5px";
        }
    });
});

//CAMBIA EL VALOR DE LA GIFTCARD

valor.addEventListener("input", function () {
    h3.innerHTML = valor.value;
});

//CAMBIA LA ALINEACIÓN DEL TEXTO EN LA TARJETA

var radios = document.querySelectorAll('input[name="alineacion"]');

radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        var alineacion = this.value;
        var tarjeta = document.getElementById('tarjeta');

        switch (alineacion) {
            case 'centrado':
                tarjeta.style.justifyContent = 'center';
                break;
            case 'arriba':
                tarjeta.style.justifyContent = 'flex-start';
                break;
            case 'abajo':
                tarjeta.style.justifyContent = 'flex-end';
                break;
            default:
                tarjeta.style.justifyContent = 'center';
        }
    });
});

//MUESTRA UN MENSAJE - MODAL AL CONFIRMAR LA GIFTCARD.

let btn1 = document.getElementsByClassName("enviar")[0];

let span = document.getElementsByClassName("close")[0];

document.getElementById("botonEnviar").addEventListener("click", function (event) {

    let nombreApellido = document.getElementById("texto").value;
    let montoGiftCard = document.getElementById("valor").value;

    let opcionesColor = document.getElementsByName("color");
    let opcionesTamaño = document.getElementsByName("tamaño");
    let opcionesAlineacion = document.getElementsByName("alineacion");
    let opcionesFondo = document.getElementsByName("fondo");

    if (nombreApellido === '' || montoGiftCard === '') {
        alert("Por favor, completa todos los campos de texto.");
        event.preventDefault();
    }
    else if (!validarRadioSeleccionado(opcionesColor) || !validarRadioSeleccionado(opcionesTamaño) ||
        !validarRadioSeleccionado(opcionesAlineacion) || !validarRadioSeleccionado(opcionesFondo)) {
        alert("Por favor, selecciona una opción en cada uno de los grupos de botones.");
        event.preventDefault();
    } else {
        event.preventDefault();

        let modal = document.getElementById("myModal");
        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
            location.reload();
        }
    }
});

function validarRadioSeleccionado(opcionesRadio) {
    for (let i = 0; i < opcionesRadio.length; i++) {
        if (opcionesRadio[i].checked) {
            return true;
        }
    }
    return false;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let btn = document.getElementsByClassName("enviar")[0];
btn.onclick = function () {
    modal.style.display = "block";
}