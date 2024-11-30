emailjs.init("sHWSgPmLbuz369nQd");

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("formModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalClose = document.querySelector(".modal-close");

    function showModal(type, title, message) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        if (type === "success") {
            modalTitle.className = "text-2xl font-bold mb-4 text-green-600";
        } else {
            modalTitle.className = "text-2xl font-bold mb-4 text-red-600";
        }

        modal.style.display = "flex";
    }
    function closeModal() {
        modal.style.display = "none";
    }
    modalCloseBtn.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.querySelector("input[name='name']").value;
            const email = document.querySelector("input[name='email']").value;
            const phone = document.querySelector("input[name='phone']").value;
            const message = document.querySelector("textarea[name='message']").value;
            if (!name || !email || !phone || !message) {
                showModal("error", "Error", "Por favor completa todos los campos.");
                return;
            }

            // Parámetros para EmailJS
            const templateParams = {
                name: name,
                email: email,
                phone: phone,
                message: message,
            };
            const serviceID = "service_mghfs9g";
            const templateID = "template_wh0uqi9";
            emailjs
                .send(serviceID, templateID, templateParams)
                .then((response) => {
                    console.log(
                        "Correo enviado con éxito",
                        response.status,
                        response.text
                    );
                    showModal(
                        "success",
                        "Formulario Enviado",
                        "¡Gracias por contactarnos! Nos pondremos en contacto pronto."
                    );
                    e.target.reset();
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                    showModal(
                        "error",
                        "Error",
                        "Hubo un problema al enviar el formulario. Por favor, inténtalo nuevamente."
                    );
                    console.log("Datos enviados a EmailJS:", templateParams);
                });
        });
});
