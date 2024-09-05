'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const handleOpenModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const handleCloseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Attach eventLister to all 3 buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i]);
  btnsOpenModal[i].addEventListener('click', handleOpenModal);
}

// close btn eventHandler
btnCloseModal.addEventListener('click', handleCloseModal);

// handle click outside
overlay.addEventListener('click', handleCloseModal);

// handle keyboard event
// keyboard events are global events, do not happen on one specific element
// so we have to listent on whole document
// when a event happened JS generates an event object, we can access all the data related to that event using that object in eventHandler funtion
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    handleCloseModal();
  }
});
