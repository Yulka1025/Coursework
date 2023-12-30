(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        form: document.querySelector('.contact__form') // Додаємо ссилку на форму
    };

    // Функція для відкриття модального вікна
    function openModal() {
        refs.modal.classList.remove("is-hidden");
    }

    // Функція для закриття модального вікна
    function closeModal() {
        refs.modal.classList.add("is-hidden");
    }

    // Обробка відправки форми
    refs.form.addEventListener('submit', (event) => {
        event.preventDefault(); // Запобігаємо стандартну відправку форми
        
        // Отримуємо дані з форми
        const email = refs.form.querySelector('#e-mail').value;

        fetch('http://127.0.0.1:3000/app/mail/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data.result);
            openModal(); // Відкриваємо модальне вікно після успішної відправки
        })
        .catch(error => {
            console.error('Error:', error);
            // Тут можна відкрити модальне вікно з повідомленням про помилку
        });
    });

    // Додаємо обробника подій для закриття модального вікна
    refs.closeModalBtn.addEventListener("click", closeModal);
})();
