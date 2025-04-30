const bodyElement = document.querySelector('body');
const toggleElement = document.querySelector('#theme-toggle'); // Para manejar ambos estados

toggleElement.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');

    if (bodyElement.classList.contains('dark')) {
        toggleElement.classList.remove('bi-brightness-high');
        toggleElement.classList.add('bi-moon-fill');
    } else {
        toggleElement.classList.remove('bi-moon-fill');
        toggleElement.classList.add('bi-brightness-high');
    }
});
