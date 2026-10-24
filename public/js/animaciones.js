// Animaciones del sitio AutoPremium (no modifica el funcionamiento del chat)

// Aparición suave de los bloques al hacer scroll
const elementos = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.12 });

    elementos.forEach((el, i) => {
        el.style.transitionDelay = (i % 4) * 0.08 + "s";
        observador.observe(el);
    });
} else {
    elementos.forEach((el) => el.classList.add("visible"));
}

// Botones de preguntas sugeridas en la página del chatbot
// (se escucha en todo el documento para que sigan andando después de "Nuevo chat")
document.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".sugerencia");
    const formulario = document.getElementById("chat-form");
    const entrada = document.getElementById("message-input");

    if (!boton || !formulario || !entrada) return;

    entrada.value = boton.textContent.trim();
    formulario.requestSubmit();
});
