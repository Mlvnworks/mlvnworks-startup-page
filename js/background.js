const changeBgBtn = document.querySelector('#change-bg');
const changeBgDismiss = document.querySelector('#arrow');
const changeBgModal = document.querySelector('#upload-section');
const changeBgForm = document.querySelector('#change-bg-form');
const browseBtn = document.querySelector('#browse');
const uploadInput = document.querySelector('#img-upload');

// browsefile
uploadInput.addEventListener('change', () => {
    const img = uploadInput.files[0];
    saveAndOutput(img);
});
// open and close upload modal
let modalState = false;
const cl_op_modal = () => {
    if (modalState) {
        changeBgModal.style.translate = '0 0';
    } else {
        changeBgModal.style.translate = '0 -100vh';
    }
};

// close pload modal
changeBgDismiss.addEventListener('click', () => {
    modalState = false;
    cl_op_modal();
});

// open modal
changeBgBtn.addEventListener('click', () => {
    modalState = true;
    cl_op_modal();
});

// when browse btn clicked
browseBtn.addEventListener('click', () => {
    uploadInput.click();
});

// on file drag
changeBgForm.addEventListener('dragover', e => {
    e.preventDefault();
    changeBgForm.classList.add('active');
});

changeBgForm.addEventListener('dragleave', e => {
    e.preventDefault();
    changeBgForm.classList.remove('active');
});

changeBgForm.addEventListener('drop', ev => {
    ev.preventDefault();
    const file = ev.dataTransfer.files[0];
    saveAndOutput(file);
});

const saveAndOutput = file => {
    const type = file.type.split('/')[0];

    if (type !== 'image') {
        window.alert('Images only!');
    } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            localStorage.setItem('bg', reader.result);
            location.reload();
        };
    }
};

// set bg
const mainSection = document.querySelector('.main-section');
const storedKey = localStorage.getItem('bg');
const curBg = storedKey ? storedKey : './extras/Assets/outdoor.jpg';

mainSection.style.background = `url(${curBg})`;
mainSection.style.backgroundRepeat = `no-repeat`;
mainSection.style.backgroundSize = `cover`;
mainSection.style.backgroundBlendMode = `darken`;
