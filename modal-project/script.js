'use strict';
const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(btnShowModal);

console.log(btnCloseModal);
console.log(modal);
console.log(overlay);
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function() {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    console.log('a key was pressed');
    console.log(e.key);
    if (e.key === 'Escape') {
        console.log('escape was pressed');
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});