// shortcut mobile view effect
const trigBtn = document.querySelector('#trig-btn');
const overlay = document.querySelector('.overlay');
const shortcuts = document.querySelectorAll('.shortcut');

let state = false;

trigBtn.addEventListener('click', () => {
    state = !state;
    if (state) {
        overlay.style.display = 'block';
        trigBtn.style.transform = 'rotate(-180deg)';
        showHide(shortcuts);
    } else {
        overlay.style.display = 'none';
        trigBtn.style.transform = 'rotate(0)';
        showHide(shortcuts);
    }
});

const showHide = arrel => {
    if (state) {
        arrel.forEach(shortcut => {
            shortcut.style.transform = 'translateX(0)';
        });
    } else {
        arrel.forEach(shortcut => {
            shortcut.style.transform = 'translateX(100vw)';
        });
    }
};

//search bar effect
const searchInput = document.querySelector('#search-input');
const legend = document.querySelector('legend');

searchInput.addEventListener('focus', () => {
    legend.style.top = '-20px';
    legend.style.color = 'black';
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        legend.style.top = '7px';
        legend.style.color = '#bbb';
    }
});
