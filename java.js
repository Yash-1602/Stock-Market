const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
});
