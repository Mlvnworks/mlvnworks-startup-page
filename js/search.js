const sI = document.querySelector('#search-input');
const form = document.querySelector('#form-search');

form.addEventListener('submit', e => {
    e.preventDefault();
    const searching = sI.value.toLowerCase();
    window.open(`https://www.google.com/search?q=${searching}`);
});
