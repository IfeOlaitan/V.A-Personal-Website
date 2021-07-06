const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const list = document.querySelector('.list');

menu.addEventListener('click', function () {
    list.classList.add('show');
});

close.addEventListener('click', function () {
    list.classList.remove('show');
});
