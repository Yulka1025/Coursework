(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        form: document.querySelector('.contact__form')
    };

    function openModal() {
        refs.modal.classList.remove("is-hidden");
    }
    function closeModal() {
        refs.modal.classList.add("is-hidden");
    }
    refs.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
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
            openModal(); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    document.querySelectorAll('[data-modal-close]').forEach(button => {
        button.addEventListener('click', closeModal);
    });
})();

