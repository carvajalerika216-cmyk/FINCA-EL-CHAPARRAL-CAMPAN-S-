// ========================================
// PROCESO DE LOS PRODUCTOS
// ========================================

const botonesProceso = document.querySelectorAll(".btn-proceso");

const modalProducto = document.getElementById("modal-producto");
const cerrarModal = document.getElementById("cerrar-modal");

const tituloModal = document.getElementById("titulo-modal");
const textoModal = document.getElementById("texto-modal");
const procesoModal = document.getElementById("proceso-modal");

botonesProceso.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const producto = boton.dataset.producto;

    if (producto === "cafe") {
      tituloModal.textContent = "☕ Campan's Café";

      textoModal.textContent = "Proceso del café:";

      procesoModal.innerHTML = `
                <p>El proceso comienza con la cosecha de los frutos maduros del café.
                  Luego se realiza el despulpado y lavado para retirar la pulpa y limpiar los granos. 
                  Después, los granos pasan por un proceso de secado hasta alcanzar la humedad adecuada. 
                  Finalmente, se tuestan, muelen y empacan, obteniendo un café listo para preparar y disfrutar.
            `;
    } else if (producto === "miel") {
      tituloModal.textContent = "🍯 Campan's Miel";

      textoModal.textContent = "Proceso de la miel: ";

      procesoModal.innerHTML = `
                <p> La producción de miel comienza cuando las abejas recolectan el néctar de las flores 
                y lo llevan a la colmena. Allí, el néctar se transforma y se almacena en los panales. 
                Cuando la miel está madura, se extrae de los panales, se filtra y se envasa para su consumo.
            `;
    } else if (producto === "pescado") {
      tituloModal.textContent = "🐟 Campan's Pescado";

      textoModal.textContent = "Proceso del pescado: ";

      procesoModal.innerHTML = `
                <p> La producción comienza con la cría de tilapias rojas y negras en estanques, 
                donde reciben alimentación y cuidados adecuados. Cuando alcanzan el tamaño ideal, 
                se realiza la pesca y selección de los ejemplares. Finalmente, se limpian, preparan\
               y empacan para su comercialización y consumo.
            `;
    }

    modalProducto.classList.add("mostrar");
  });
});

// ========================================
// FILTROS DE LA GALERÍA
// ========================================

const botonesGaleria = document.querySelectorAll(".filtros-galeria button");
const elementosGaleria = document.querySelectorAll(".galeria-item");

botonesGaleria.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // Obtener la categoría seleccionada
    const filtro = boton.dataset.filter;

    // Cambiar el botón activo
    botonesGaleria.forEach(function (btn) {
      btn.classList.remove("activo");
    });

    boton.classList.add("activo");

    // Mostrar u ocultar las imágenes
    elementosGaleria.forEach(function (elemento) {
      if (filtro === "todos") {
        elemento.style.display = "block";
      } else if (elemento.classList.contains(filtro)) {
        elemento.style.display = "block";
      } else {
        elemento.style.display = "none";
      }
    });
  });
});

cerrarModal.addEventListener("click", function () {
  modalProducto.classList.remove("mostrar");
});

// CERRAR CON LA X

cerrarVisor.addEventListener("click", function () {
  visorGaleria.classList.remove("mostrar");

  imagenVisor.src = "";
});
// ================================
// FORMULARIO DE CONTACTO - WHATSAPP
// ================================

const formulario = document.getElementById("formulario-contacto");

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const texto =
      "Hola, Finca El Chaparral.%0A%0A" +
      "*Nuevo mensaje desde la página web*%0A%0A" +
      "*Nombre:* " +
      nombre +
      "%0A" +
      "*Correo:* " +
      correo +
      "%0A" +
      "*Teléfono:* " +
      telefono +
      "%0A" +
      "*Mensaje:* " +
      mensaje;

    const numeroWhatsApp = "573177428666";

    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + texto;

    window.open(url, "_blank");

    formulario.reset();
  });
}
