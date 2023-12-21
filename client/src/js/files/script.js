// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    // Додавання обробника подій для відкриття модального вікна
    refs.openModalBtn.addEventListener("click", () => {
        refs.modal.classList.remove("is-hidden");
    });

    // Додавання обробника подій для закриття модального вікна
    refs.closeModalBtn.addEventListener("click", () => {
        refs.modal.classList.add("is-hidden");
    });


})();

const button = document.querySelector('#send-data');
const form = document.querySelector('#form');

button.addEventListener('click', (e) => {
    e.preventDefault();

    const elements = form.elements;

    const name = elements.name.value;
    const tel = elements.tel.value
    const email = elements.email.value;
    const message = elements.message.value;

    sendDataToMail(name, tel, email, message);
})

function sendDataToMail(name, tel, email, message) {
    fetch('http://127.0.0.1:3000/app/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, tel, email, message }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data.result)
        })
        .then(form.reset())
        .catch(error => console.error('Error:', error));
}
