const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const list = document.querySelector('.list');
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

menu.addEventListener('click', function () {
    list.classList.add('show');
});

close.addEventListener('click', function () {
    list.classList.remove('show');
});

function closeMenu() {
    list.classList.remove("show");
  };
  
