// Carrusel
const carruselItems = document.querySelectorAll('.carrusel-item');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
let currentIndex = 0;

function showSlide(index) {
    carruselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carruselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carruselItems.length) % carruselItems.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Cambiar automáticamente cada 5 segundos//
setInterval(nextSlide, 5000);

// Formulario de pedido
document.getElementById("formPedido").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const producto = document.getElementById("producto").value;
    const direccion = document.getElementById("direccion").value;

    if (nombre && producto && direccion) {
        alert('¡Gracias, ${nombre}! Tu pedido de ${producto} llegara pronto a ${direccion}.');
    } 
    else {
        alert("Por favor completa todos los campos.");
    }
});

$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault(); // Evita el envío predeterminado del formulario
  
      // Obtener los valores del formulario
      const name = $("#name").val();
      const email = $("#email").val();
      const message = $("#message").val();
  
      // Verificar que los campos no estén vacíos
      if (name === "" || email === "" || message === "") {
        $("#statusMessage").text("Por favor, completa todos los campos.").css("color", "red");
        return;
      }
  
      // Enviar datos a través de EmailJS
      emailjs.send("service_lrguv5m", "template_apedzt6", {
        name: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        $("#statusMessage").text("Mensaje enviado con éxito.").css("color", "green");
        $("#contactForm")[0].reset(); // Limpiar el formulario
      })
      .catch(function (error) {
        console.error("Error:", error);
        $("#statusMessage").text("Ocurrió un error. Intenta de nuevo.").css("color", "red");
      });
    });
  });