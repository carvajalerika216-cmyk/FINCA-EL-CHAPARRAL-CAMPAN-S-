// ========================================
// PROCESO DE LOS PRODUCTOS
// ========================================

const botonesProceso = document.querySelectorAll(".btn-proceso");

const modalProducto = document.getElementById("modal-producto");
const cerrarModal = document.getElementById("cerrar-modal");

const tituloModal = document.getElementById("titulo-modal");
const textoModal = document.getElementById("texto-modal");
const procesoModal = document.getElementById("proceso-modal");

if (
  botonesProceso.length > 0 &&
  modalProducto &&
  cerrarModal &&
  tituloModal &&
  textoModal &&
  procesoModal
) {
  botonesProceso.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const producto = boton.dataset.producto;

      if (producto === "cafe") {
        tituloModal.textContent = "☕ Campan's Café";

        textoModal.textContent = "Proceso del café:";

        procesoModal.innerHTML = `
          <p>
            El proceso comienza con la cosecha de los frutos maduros del café.
            Luego se realiza el despulpado y lavado para retirar la pulpa y
            limpiar los granos. Después, los granos pasan por un proceso de
            secado hasta alcanzar la humedad adecuada. Finalmente, se tuestan,
            muelen y empacan, obteniendo un café listo para preparar y disfrutar.
          </p>
        `;
      } else if (producto === "miel") {
        tituloModal.textContent = "🍯 Campan's Miel";

        textoModal.textContent = "Proceso de la miel:";

        procesoModal.innerHTML = `
          <p>
            La producción de miel comienza cuando las abejas recolectan el
            néctar de las flores y lo llevan a la colmena. Allí, el néctar se
            transforma y se almacena en los panales. Cuando la miel está madura,
            se extrae de los panales, se filtra y se envasa para su consumo.
          </p>
        `;
      } else if (producto === "pescado") {
        tituloModal.textContent = "🐟 Campan's Pescado";

        textoModal.textContent = "Proceso del pescado:";

        procesoModal.innerHTML = `
          <p>
            La producción comienza con la cría de tilapias rojas y negras en
            estanques, donde reciben alimentación y cuidados adecuados. Cuando
            alcanzan el tamaño ideal, se realiza la pesca y selección de los
            ejemplares. Finalmente, se limpian, preparan y empacan para su
            comercialización y consumo.
          </p>
        `;
      }

      modalProducto.classList.add("mostrar");
    });
  });

  cerrarModal.addEventListener("click", function () {
    modalProducto.classList.remove("mostrar");
  });
}

// ========================================
// FILTROS DE LA GALERÍA
// ========================================

const botonesGaleria = document.querySelectorAll(".filtros-galeria button");

const elementosGaleria = document.querySelectorAll(".galeria-item");

if (botonesGaleria.length > 0 && elementosGaleria.length > 0) {
  botonesGaleria.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const filtro = boton.dataset.filter;

      // Cambiar botón activo
      botonesGaleria.forEach(function (btn) {
        btn.classList.remove("activo");
      });

      boton.classList.add("activo");

      // Mostrar u ocultar elementos
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
}

// ========================================
// VISOR DE IMÁGENES DE LA GALERÍA
// ========================================

const imagenesGaleria = document.querySelectorAll(".galeria-item img");

const visorGaleria = document.getElementById("visor-galeria");

const imagenVisor = document.getElementById("imagen-visor");

const cerrarVisor = document.getElementById("cerrar-visor");

if (imagenesGaleria.length > 0 && visorGaleria && imagenVisor && cerrarVisor) {
  imagenesGaleria.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
      imagenVisor.src = imagen.src;

      visorGaleria.classList.add("mostrar");
    });
  });

  cerrarVisor.addEventListener("click", function () {
    visorGaleria.classList.remove("mostrar");

    imagenVisor.src = "";
  });

  // Cerrar haciendo clic fuera de la imagen
  visorGaleria.addEventListener("click", function (event) {
    if (event.target === visorGaleria) {
      visorGaleria.classList.remove("mostrar");

      imagenVisor.src = "";
    }
  });
}

// ========================================
// FORMULARIO DE CONTACTO - WHATSAPP
// ========================================

const formulario = document.getElementById("formulario-contacto");

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener información del formulario
    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const telefono = document.getElementById("telefono").value.trim();

    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar campos
    if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");

      return;
    }

    // Número de WhatsApp
    const numeroWhatsApp = "573177428666";

    // Crear mensaje
    const texto =
      "Hola, Finca El Chaparral.\n\n" +
      "Nuevo mensaje desde la página web\n\n" +
      "Nombre: " +
      nombre +
      "\n" +
      "Correo: " +
      correo +
      "\n" +
      "Teléfono: " +
      telefono +
      "\n" +
      "Mensaje: " +
      mensaje;

    // Crear enlace de WhatsApp
    const url =
      "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto);

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Limpiar formulario
    formulario.reset();
  });
}
