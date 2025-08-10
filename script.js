document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-section");
    const sections = document.querySelectorAll("section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            // Ocultar todas las secciones
            sections.forEach(sec => sec.classList.add("hidden"));

            // Mostrar solo la sección seleccionada
            document.getElementById(target).classList.remove("hidden");
        });
    });
});