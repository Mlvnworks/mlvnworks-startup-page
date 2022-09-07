const locSto = localStorage.getItem('username');
const username = locSto ? locSto : null;

// element
const askModal = document.querySelector('#ask-modal');
const usernameInput = document.querySelector('#username-input');
const nameForm = document.querySelector('#usname-form');
const nameOutput = document.querySelector('#name');

const validInput = /[a-z]/i;

let validity = false;

if (username === null) {
    askModal.style.display = 'flex';
}

const alert = () => {
    if (validity === false) {
        usernameInput.style.borderColor = 'red';
        usernameInput.style.borderBottom = '3px solid red';
    } else {
        usernameInput.style.borderColor = 'var(--violet)';
    }
};

nameForm.addEventListener('submit', ev => {
    if (validity === false) {
        ev.preventDefault();
    }
});

usernameInput.addEventListener('keyup', () => {
    const arrIn = usernameInput.value.split('');
    const invalidChars = arrIn.filter(x => !validInput.test(x));
    if (invalidChars.length > 0) {
        validity = false;
    } else {
        validity = true;
    }
    alert();
});

nameOutput.textContent = username;
