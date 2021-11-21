let navToggleBtn = document.querySelector('.nav-toggle');
let navContainer = document.querySelector('.nav-container');

navToggleBtn.addEventListener('click', () => {
    navContainer.classList.toggle('-translate-x-full');
});