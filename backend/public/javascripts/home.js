const input = document.querySelectorAll('.input');

input.forEach((field) => {
    field.addEventListener('focus', () => {
        field.style.border = '2px solid #31aea5';
    });

    field.addEventListener('blur', () => {
        field.style.border = '';
    });
});

window.addEventListener('click', (e) => {
    input.forEach((field) => {
        if (!field.contains(e.target)) {
            field.style.border = '';
        }
    });
});