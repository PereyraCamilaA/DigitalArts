// CARRITO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.getElementById('contador-cursos').innerText = carrito.length;

document.querySelectorAll('.enviar').forEach(boton => {
  boton.addEventListener('click', (evento) => {
    evento.preventDefault(); 

    let curso = JSON.parse(evento.target.dataset.curso);

    carrito.push(curso);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    document.getElementById('contador-cursos').innerText = carrito.length;
  });
});

let carritoImg = document.getElementById('carrito');

    carritoImg.addEventListener('click', () => {

      let cursos = JSON.parse(localStorage.getItem('carrito'));

        let popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.left = '0';
        popup.style.top = '0';
        popup.style.width = '100vw';
        popup.style.height = '100vh';
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        popup.style.display = 'flex';
        popup.style.justifyContent = 'center';
        popup.style.alignItems = 'center';
        popup.style.color = 'white';
        popup.style.padding = '20px';
        popup.style.boxSizing = 'border-box';
        popup.style.overflow = "auto";
       
       if(carrito.length === 0){
        alert("Todavía no se obtuvieron cursos.");
       } else{
        popup.innerHTML = '<div style="background: white; color: black; padding: 20px;">' +
            '<h2>Cursos seleccionados</h2>' +
            '<ul>' +
            cursos.map(curso => `<li>${curso.nombre} - Precio: $${curso.precio}</li>`).join('') +
            '</ul>' +
            '<button id="closePopup" style="margin-top: 20px;">Cerrar</button>' +
            '</div>';

        document.body.appendChild(popup);
       }

        document.getElementById('closePopup').addEventListener('click', () => {
            document.body.removeChild(popup);
        });
    });


//Carrousel Dinámico

$('.responsive').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
    speed: 400,   
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

