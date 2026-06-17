// ===============================
// NAVEGACIÓN ENTRE SECCIONES
// ===============================

const botones = document.querySelectorAll(".menu");
const secciones = document.querySelectorAll(".seccion");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar botón activo

        botones.forEach(b => b.classList.remove("activo"));

        // Activar botón seleccionado

        boton.classList.add("activo");

        // Ocultar todas las secciones

        secciones.forEach(seccion => {

            seccion.classList.remove("activa");

        });

        // Mostrar la sección correspondiente

        const id = boton.dataset.seccion;

        document
            .getElementById(id)
            .classList
            .add("activa");

    });

});