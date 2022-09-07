const facebook = document.querySelector('#facebook');
const netlify = document.querySelector('#netlify');
const youtube = document.querySelector('#youtube');
const github = document.querySelector('#github');
const classroom = document.querySelector('#classroom');
const gmail = document.querySelector('#gmail');
const drive = document.querySelector('#drive');
const toDo = document.querySelector('#toDo-icon');

facebook.addEventListener('click', () => {
    window.open('https://web.facebook.com/');
});
netlify.addEventListener('click', () => {
    window.open('https://netlify.com');
});
youtube.addEventListener('click', () => {
    window.open('https://youtube.com');
});

github.addEventListener('click', () => {
    window.open('https://github.com');
});

gmail.addEventListener('click', () => {
    window.open('https://gmail.com');
});

drive.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/u/0/my-drive');
});
classroom.addEventListener('click', () => {
    window.open('https://classroom.google.com/u/0/');
});

toDo.addEventListener('click', () => {
    window.open('https://classroom.google.com/u/0/a/not-turned-in/all');
});
